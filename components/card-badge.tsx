import { Badge } from "@/components/ui/badge";

const badgeConfig = {
  alert: { emoji: "⚠️", label: "Alert", variant: "destructive" },
  event: { emoji: "📅", label: "Event", variant: "secondary" },
  free: { emoji: "🎁", label: "Free Stuff", variant: "secondary" },
  general: { emoji: "💬", label: "General", variant: "secondary" },
} as const;

type BadgeType = keyof typeof badgeConfig;

export function CardBadge({ type }: { type: BadgeType }) {
  const { emoji, label, variant } = badgeConfig[type];

  return (
    <Badge variant={variant}>
      {emoji} {label}
    </Badge>
  );
}
