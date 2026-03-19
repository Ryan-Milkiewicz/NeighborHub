"use client";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardBadge } from "./card-badge";
import { formatDistanceToNow } from "date-fns";
import { FavouriteIcon, MailReply01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";

import { useQuery } from "convex/react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function Feed() {
  const posts = useQuery(api.posts.getFeedPosts);
  const toggleLike = useMutation(api.posts.toggleLike);
  console.log(posts);
  if (posts === undefined) return <div>Loading...</div>;

  return (
    <>
      {posts.map((post) => {
        const initials = `${post.author?.firstName?.[0] ?? ""}${post.author?.lastName?.[0] ?? ""}`;

        return (
          <Card key={post._id} size="sm" className="mx-auto w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>
                    {post.author?.firstName} {post.author?.lastName}
                  </CardTitle>
                  <CardDescription>
                    {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                  </CardDescription>
                </div>
              </div>
              <CardAction>
                <CardBadge type={post.type} />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <Separator className="my-2" />
            <CardFooter>
              <div className="flex items-center gap-6">
                <Button
                  variant={post.likedByUser ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleLike({ postId: post._id })}
                >
                  <HugeiconsIcon
                    icon={FavouriteIcon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  {post.likes}
                </Button>
                <Button variant="outline" size="sm">
                  <HugeiconsIcon
                    icon={MailReply01Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  2 replies
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
