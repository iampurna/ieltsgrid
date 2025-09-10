"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  PenTool,
  Headphones,
  Mic,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Book,
  GraduationCap,
  Globe,
  Lightbulb,
  FileText,
  File,
  Edit,
  Music,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import AdSidebar from "@/components/ads/AdSidebar";

const iconMap = {
  Home,
  BookOpen: Book,
  PenTool,
  Headphones,
  Mic,
  TrendingUp,
  Book,
  GraduationCap,
  Globe,
  Lightbulb,
  FileText,
  File,
  Edit,
  Music,
  MessageCircle,
};

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

export default function Sidebar({
  isCollapsed = false,
  onToggle,
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isExpanded = (label: string) => expandedItems.includes(label);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="fixed left-0 top-0 h-screen bg-white border-r shadow-sm z-40 flex flex-col"
    >
      {/* Logo Section */}
      <div className="p-6 border-b">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              IELTSGrid
            </span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const hasChildren = item.children && item.children.length > 0;
            const itemExpanded = isExpanded(item.label);
            const itemActive = isActive(item.href);

            return (
              <div key={item.label}>
                {hasChildren ? (
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-gray-100",
                      itemActive &&
                        "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-r-2 border-blue-600"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="font-medium">{item.label}</span>
                      )}
                    </div>
                    {!isCollapsed && (
                      <motion.div
                        animate={{ rotate: itemExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-100",
                      itemActive &&
                        "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-r-2 border-blue-600"
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </Link>
                )}

                {/* Submenu */}
                {hasChildren && !isCollapsed && (
                  <AnimatePresence>
                    {itemExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {item.children?.map((child) => {
                          const ChildIcon =
                            iconMap[child.icon as keyof typeof iconMap];
                          const childActive = isActive(child.href);

                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={cn(
                                "flex items-center gap-3 p-2 rounded-lg text-sm transition-all duration-200 hover:bg-gray-50",
                                childActive &&
                                  "bg-blue-50 text-blue-600 font-medium"
                              )}
                            >
                              <ChildIcon className="w-4 h-4" />
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Ad Space */}
      {!isCollapsed && (
        <div className="p-4 border-t">
          <AdSidebar />
        </div>
      )}
    </motion.aside>
  );
}
