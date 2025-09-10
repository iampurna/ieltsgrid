import React from "react";
import QuestionRenderer from "../test/QuestionRenderer";
import Card from "../ui/Card";
import { Badge } from "lucide-react";

export const MDXComponents = {
  // Custom components for MDX
  Question: QuestionRenderer,
  Card: Card,
  Badge: Badge,

  // Enhanced HTML elements
  h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-neutral-900 mb-6" {...props}>
      {children}
    </h1>
  ),

  h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      className="text-2xl font-semibold text-neutral-900 mb-4 mt-8"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-neutral-900 mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),

  p: ({ children, ...props }: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-neutral-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  blockquote: ({ children, ...props }: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary-600 pl-4 italic text-neutral-600 my-4"
      {...props}
    >
      {children}
    </blockquote>
  ),

  ul: ({ children, ...props }: React.HTMLProps<HTMLUListElement>) => (
    <ul
      className="list-disc list-inside space-y-2 mb-4 text-neutral-700"
      {...props}
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-inside space-y-2 mb-4 text-neutral-700"
      {...props}
    >
      {children}
    </ol>
  ),

  strong: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold text-neutral-900" {...props}>
      {children}
    </strong>
  ),

  code: ({ children, ...props }: React.HTMLProps<HTMLElement>) => (
    <code
      className="bg-neutral-100 text-neutral-800 px-2 py-1 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }: React.HTMLProps<HTMLPreElement>) => (
    <pre
      className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto mb-4"
      {...props}
    >
      {children}
    </pre>
  ),
};
