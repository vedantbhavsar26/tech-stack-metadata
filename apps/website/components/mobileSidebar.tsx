import { SidebarItem } from "@/components/SidebarItem";
import { sidebarContent } from "@/lib/data/sidebar";
import { omit } from "@/lib/omit";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import React, { useState } from "react";

export function MobileSidebar(props: { id: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectedItem = sidebarContent.find(item => item.href.split("/").at(-1) === props.id);
  const index = sidebarContent.findIndex(item => item.href.split("/").at(-1) === props.id);
  return (
    <aside className="sticky md:hidden top-0 grid gap-4 rounded-sm md:p-8 p-4">
      <div
        className="flex justify-between gap-8 items-center"
        onClick={() => setIsOpen(e => !e)}
      >
        <div className="grid">
          <h2 className={cn(" font-semibold mb-2 text-sm")}>
            {index + 1}
            .
            {" "}
            {selectedItem?.title}
          </h2>
          <p className={cn(" text-xs  mb-2 text-inherit/50",
          )}
          >
            {selectedItem?.description}
          </p>
        </div>
        <div className=" relative rotate-45 ">
          <ArrowDownIcon className={cn("h-5 w-5  ")} />
        </div>

      </div>
      <AnimatePresence>
        {isOpen
          && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="pl-5 list-disc pt-4"
            >
              {sidebarContent.map((item, index) => (
                <SidebarItem
                  {...omit(item, ["component"])}
                  key={item.title}
                  isRoot
                  activeId={props.id}
                  index={index}
                />
              ))}
            </motion.ul>
          )}
      </AnimatePresence>

    </aside>
  );
}
