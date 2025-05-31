import { SidebarItem } from "@/components/SidebarItem";
import { sidebarContent } from "@/lib/data/sidebar";
import { omit } from "@/lib/omit";
import React from "react";

export function BaseSidebar(props: { id: string }) {
  return (
    <aside className="sticky max-md:hidden top-0 rounded-sm p-8">
      <ul className="">
        {sidebarContent.map((item, index) => (
          <SidebarItem
            {...omit(item, ["component"])}
            key={item.title}
            isRoot
            activeId={props.id}
            index={index}
          />
        ))}
      </ul>
    </aside>
  );
}
