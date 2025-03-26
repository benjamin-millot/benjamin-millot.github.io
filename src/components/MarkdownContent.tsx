'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
        p: ({ children, node }) => {
          // Check if the paragraph contains an image
          const hasImage = node?.children?.some((child: any) => child.tagName === 'img');
          if (hasImage) {
            return <>{children}</>;
          }
          return <p className="mb-4">{children}</p>;
        },
        ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
        li: ({ children }) => <li className="mb-2">{children}</li>,
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => <code className="bg-gray-100 rounded px-1 py-0.5">{children}</code>,
        pre: ({ children }) => <pre className="bg-gray-100 rounded p-4 mb-4 overflow-x-auto">{children}</pre>,
        img: ({ src, alt }) => {
          if (!src) return null;
          return (
            <div className="my-6">
              <Image
                src={src}
                alt={alt || ''}
                width={800}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
} 