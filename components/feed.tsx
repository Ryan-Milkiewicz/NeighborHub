import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
import { FavouriteIcon, MailReply01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "@/components/ui/separator";

export function Feed() {
  return (
    <Card size="sm" className="mx-auto w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Ryan M.</CardTitle>
            <CardDescription>5 mins ago</CardDescription>
          </div>
        </div>
        <CardAction>
          <CardBadge type="event" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This is an example of a feed item. It includes an avatar, title,
          description, badge, and an action button. You can customize the
          content and styling as needed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </CardContent>
      <Separator className="my-2" />
      <CardFooter>
        <div className="flex items-center gap-6">
          <Button variant="outline" size="sm">
            <HugeiconsIcon
              icon={FavouriteIcon}
              strokeWidth={2}
              className="size-4"
            />
            5
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
}
