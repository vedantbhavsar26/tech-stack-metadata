import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TechMetaData } from "@exlaso/tech-stack-metadata";
import { motion } from "framer-motion";
import type React from "react";

export const TechCards: React.FC<{
  item: TechMetaData;
  index: number;
}> = ({ item, index }) => {
  return (
    <motion.div
      key={`${item.name}-${index}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.05, 1) }}
    >
      <Card className="overflow-hidden hover:shadow-md transition-all border-muted/50 h-full">
        <CardContent className="md:p-4 flex flex-col h-full">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex-shrink-0  rounded-md flex items-center justify-center text-2xl",
                "",
              )}
            >
              {item?.icon({})}
            </div>
            <div className="flex-1  min-w-0 max-md:hidden">
              <h3 className="font-medium truncate" title={item.name}>{item.name}</h3>
              <Badge variant="outline" className="mt-1 capitalize">
                {item.category.at(0)}
              </Badge>
            </div>
          </div>
          {item.aliases && item.aliases.length > 0 && (
            <p className="text-sm text-muted-foreground max-md:hidden mt-3 line-clamp-2">
              {item.aliases.join(", ")}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
