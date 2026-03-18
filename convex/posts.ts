import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").collect();

    return await Promise.all(
      posts.map(async (post) => {
        const author = await ctx.db.get(post.authorId);
        return {
          ...post,
          author,
        };
      }),
    );
  },
});
