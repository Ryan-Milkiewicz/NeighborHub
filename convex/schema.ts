import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    // initials: v.string(),
    // street: v.optional(v.string()),
    //neighborhood: v.optional(v.string()),
    //createdAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),

  posts: defineTable({
    content: v.string(),
    type: v.union(
      v.literal("general"),
      v.literal("alert"),
      v.literal("event"),
      v.literal("free"),
    ),
    authorId: v.id("users"),
    createdAt: v.number(),
  }).index("by_author", ["authorId"]),

  comments: defineTable({
    content: v.string(),
    postId: v.id("posts"),
    userId: v.id("users"),
    createdAt: v.number(),
  })
    .index("by_post", ["postId"])
    .index("by_post_and_user", ["postId", "userId"]),

  likes: defineTable({
    postId: v.id("posts"),
    userId: v.id("users"),
  })
    .index("by_post", ["postId"])
    .index("by_user", ["userId"])
    .index("by_post_and_user", ["postId", "userId"]),
});
