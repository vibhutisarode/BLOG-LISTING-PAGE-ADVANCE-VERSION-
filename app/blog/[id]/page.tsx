'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '@/types/blog'
import { formatDate, getReadingTime } from '@/lib/utils'
import blogsData from '@/data/blogs.json'

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const foundBlog = (blogsData as Blog[]).find(b => b.id === params.id)
    if (!foundBlog) {
      notFound()
    }
    setBlog(foundBlog)
    setLoading(false)
  }, [params.id])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (!blog) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Blogs</span>
          </Link>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {blog.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                {blog.description}
              </p>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {blog.author.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <span>📅</span>
                      <span>{formatDate(blog.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⏱️</span>
                      <span>{getReadingTime(blog.readTime)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg transition-colors ${
                  isLiked 
                    ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                👍
              </button>
              
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                🔖
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                📤
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 animate-fade-in">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            style={{
              lineHeight: '1.8',
              fontSize: '18px'
            }}
          >
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(blogsData as Blog[])
              .filter(b => b.id !== blog.id && b.category === blog.category)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.id}`}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical' as const,
                          overflow: 'hidden'
                        }}>
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm"
                       style={{
                         display: '-webkit-box',
                         WebkitLineClamp: 2,
                         WebkitBoxOrient: 'vertical' as const,
                         overflow: 'hidden'
                       }}>
                      {relatedBlog.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  )
}
