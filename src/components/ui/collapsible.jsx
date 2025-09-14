"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import Icon from "@/components/ui/icon";

function Collapsible(props) {
  return (
    <CollapsiblePrimitive.Root
      className="flex flex-col gap-1"
      data-slot="collapsible"
      {...props}
    />
  );
}

function CollapsibleTrigger({ children, ...props }) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className="flex items-center self-stretch flex-wrap gap-1 pl-0 pr-2 py-1 text-foreground text-sm font-normal leading-5 [font-feature-settings:'ss01','cv01','cv11'] w-full"
      {...props}
    >
      {/* Arrow icon */}
      <Icon
        name="ArrowRight"
        size={16}
        className="transition-transform w-4 h-4 group-data-[state=open]/collapsible:rotate-90"
      />
      {children}
    </CollapsiblePrimitive.CollapsibleTrigger>
  );
}

function CollapsibleContent(props) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className="space-y-1 "
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
