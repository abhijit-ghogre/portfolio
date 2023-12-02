import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

interface Props {
  icon: React.ReactNode;
  href: string;
  color?: string;
  tooltip: string;
}

function ExternalLink(props: Props) {
  const { href, icon, color = "#000", tooltip } = props;
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <a
          href={href}
          target="_blank"
          className="text-4xl"
          style={{ color: color }}
        >
          {icon}
        </a>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className={cn(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          )}
          style={{
            backgroundColor: color,
            color: "#fff",
          }}
        >
          {tooltip}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default ExternalLink;
