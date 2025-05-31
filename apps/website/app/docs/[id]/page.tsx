import { SidebarItem } from "@/components/SidebarItem";
import { sidebarContent } from "@/lib/data/sidebar";
import { omit } from "@/lib/omit";
import { notFound } from "next/navigation";
import type { FunctionComponent } from "react";
import React from "react";

type typesforPage = {
  params: Promise<{ id: string }>;
};
const Page: FunctionComponent<typesforPage> = async (props) => {
  const id = await props.params.then(params => params.id);
  console.log({ id });
  const sidebar = sidebarContent.find(sidebarItem => sidebarItem.href?.split("/").at(-1)?.includes(id));
  console.log(sidebar);
  if (!sidebar)
    return notFound();

  return (
    <main className="relative mx-auto flex gap-8">
      <nav className="bg-primary/5 max-w-sm" aria-label="Documentation sidebar">
        <aside className="sticky top-0 rounded-sm p-8">
          <ul className="">
            {sidebarContent.map((item, index) => (
              <SidebarItem
                {...omit(item, ["component"])}
                key={item.title}
                isRoot
                activeId={id}
                index={index}
              />
            ))}
          </ul>
        </aside>
      </nav>
      <sidebar.component />
    </main>
  );
};
export default Page;
