import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { id } from "date-fns/locale";

export const toggleLike = mutation({
  args: {
    postId: v.id("posts"),
  },
  handler: async (ctx, args) => {
    // Check if the user is authenticated first, if not we return
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Not authenticated");

    // Get the current user
    const currentUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .unique();

    // Make sure there is a current user else return error
    if (!currentUser) throw new Error("User not found");

    // Query likes to see if user already liked a post
    const existingLike = await ctx.db
      .query("likes")
      .withIndex("by_post_and_user", (q) =>
        q.eq("postId", args.postId).eq("userId", currentUser._id),
      )
      .unique();

    // If they already liked a post then we delete record else add record
    // This is for the toggle button
    if (existingLike) {
      await ctx.db.delete(existingLike._id);
    } else {
      await ctx.db.insert("likes", {
        postId: args.postId,
        userId: currentUser._id,
      });
    }
  },
});

export const getFeedPosts = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    // Get the convex user record from clerk id
    const currentUser = identity
      ? await ctx.db
          .query("users")
          .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
          .unique()
      : null;

    // Get all the posts
    const posts = await ctx.db.query("posts").collect();

    return await Promise.all(
      posts.map(async (post) => {
        // Get the author of the post
        const author = await ctx.db.get(post.authorId);
        const likes = await ctx.db
          .query("likes")
          .withIndex("by_post", (q) => q.eq("postId", post._id))
          .collect();

        const userLike = currentUser
          ? await ctx.db
              .query("likes")
              .withIndex("by_post_and_user", (q) =>
                q.eq("postId", post._id).eq("userId", currentUser._id),
              )
              .unique()
          : null;

        return {
          ...post,
          author: author
            ? {
                id: author._id,
                firstName: author.firstName,
                lastName: author.lastName,
              }
            : null,
          //author,
          likes: likes.length,
          likedByUser: !!userLike,
        };
      }),
    );
  },
});
