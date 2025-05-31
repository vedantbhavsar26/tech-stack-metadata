"use client";

import { TechCards } from "@/components/tech-cards";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CategoryKey, IconType, TechMetaData } from "@exlaso/tech-stack-metadata";
import { categories, getTechMetadataByCategory } from "@exlaso/tech-stack-metadata";
import { motion } from "framer-motion";
import { Package, Search, X } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

const TechData: TechMetaByCategory[] = Object.entries(categories).map(([category, categoryData]) => ({
  label: category,
  icon: categoryData.icon,
  items: getTechMetadataByCategory(category as CategoryKey, true),
})).filter(e => e.items.length > 0);

type TechMetaByCategory = {
  label: string;
  icon: IconType;
  items: TechMetaData[];
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

export function TechShowcase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<TechMetaByCategory[]>(TechData);
  const [activeTab, setActiveTab] = useState("all");
  const [isFiltering, setIsFiltering] = useState(false);

  // Filter tech items based on search query
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredCategories(TechData);
        setIsFiltering(false);
        return;
      }

      const query = searchQuery.toLowerCase();
      const filtered = TechData
        .map(category => ({
          ...category,
          items: category.items.filter(
            item =>
              item.name.toLowerCase().includes(query)
              || (item.aliases && item.aliases.length > 0
                && item.aliases.some(alias => alias.toLowerCase().includes(query))),
          ),
        }))
        .filter(category => category.items.length > 0);

      setFilteredCategories(filtered);
      setIsFiltering(false);
    }, 300); // Debounce filtering

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Get all tech items across all categories with unique identifiers
  const filteredAllTechItems = filteredCategories.flatMap(category => category.items)
    .map((item, index) => ({
      ...item,
      key: `${item.name}-${index}`, // Unique key for each item
    }));

  // Check if search has no results
  const hasNoResults = filteredCategories.length === 0 || (
    activeTab === "all" && filteredAllTechItems.length === 0
  );

  // Clear search query
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="tech-showcase rounded-lg border border-border p-6">
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            aria-hidden="true"
          />
          <Input
            placeholder={`Search technologies... (e.g. React, Node.js) from ${TechData.length}+ categories`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
            aria-label="Search technologies"
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <Tabs
        defaultValue="all"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="overflow-x-auto pb-2">
          <TabsList className="h-auto flex-wrap p-1">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary/10"
            >
              <Package className="h-4 w-4" />
              <span>All</span>
            </TabsTrigger>
            {TechData.map(category => (
              <TabsTrigger
                key={category.label}
                value={category.label}
                className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary/10"
              >
                <span className="text-lg" aria-hidden="true">
                  {category.icon({})}
                </span>
                <span className="capitalize">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          {isFiltering
            ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-24 bg-muted rounded-lg"></div>
                  ))}
                </div>
              )
            : hasNoResults
              ? (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn}
                    className="text-center py-16 bg-muted/20 rounded-lg"
                  >
                    <p className="text-lg text-muted-foreground mb-2">
                      No technologies found matching "
                      {searchQuery}
                      "
                    </p>
                    <button
                      onClick={handleClearSearch}
                      className="text-primary hover:underline font-medium mt-2"
                    >
                      Clear search
                    </button>
                  </motion.div>
                )
              : (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeIn}
                    className="grid grid-cols-4 gap-4"
                  >
                    {filteredAllTechItems.map((item, index) => (
                      <TechCards item={item} index={index} key={item.key} />
                    ))}
                  </motion.div>
                )}
        </TabsContent>

        {TechData.map(category => (
          <TabsContent key={category.label} value={category.label} className="mt-6">
            {isFiltering
              ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-24 bg-muted rounded-lg"></div>
                    ))}
                  </div>
                )
              : filteredCategories.find(c => c.label === category.label)?.items.length === 0
                ? (
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={fadeIn}
                      className="text-center py-16 bg-muted/20 rounded-lg"
                    >
                      <p className="text-lg text-muted-foreground mb-2">
                        No
                        {" "}
                        {category.label}
                        {" "}
                        technologies found matching "
                        {searchQuery}
                        "
                      </p>
                      <button
                        onClick={handleClearSearch}
                        className="text-primary hover:underline font-medium mt-2"
                      >
                        Clear search
                      </button>
                    </motion.div>
                  )
                : (
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={fadeIn}
                      className="grid grid-cols-4 gap-4"
                    >
                      {filteredCategories
                        .find(c => c.label === category.label)
                        ?.items
                        .map((item, index) => (
                          <TechCards item={item} index={index} key={item.key} />
                        ))}
                    </motion.div>
                  )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
