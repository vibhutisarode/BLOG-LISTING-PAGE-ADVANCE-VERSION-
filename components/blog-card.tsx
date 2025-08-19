'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '@/types/blog'
import { formatDate, getReadingTime } from '@/lib/utils'

interface BlogCardProps {
  blog: Blog
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover-lift group transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={400}
          height={240}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <span>📅</span>
            <span>{formatDate(blog.publishDate)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⏱️</span>
            <span>{getReadingTime(blog.readTime)}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 overflow-hidden group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden'
            }}>
          {blog.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4"
           style={{
             display: '-webkit-box',
             WebkitLineClamp: 3,
             WebkitBoxOrient: 'vertical' as const,
             overflow: 'hidden'
           }}>
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex items-center space-x-1">
              <span>👤</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {blog.author.name}
              </span>
            </div>
          </div>

          <Link
            href={`/blog/${blog.id}`}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group/link"
          >
            <span>Read More</span>
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
