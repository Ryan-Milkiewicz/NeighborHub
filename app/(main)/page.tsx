import { Feed } from "@/components/feed";
import { PostForm } from "@/components/post-form";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const initials = `${user?.firstName?.[0] ?? ""}${user?.lastName?.[0] ?? ""}`;
  return (
    <>
      <PostForm initials={initials} />
      <Feed />
    </>
  );
}
