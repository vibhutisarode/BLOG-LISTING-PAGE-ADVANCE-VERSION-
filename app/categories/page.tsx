'use client'

import { useState } from 'react'
import { BlogHeader } from '@/components/blog-header'
import { BlogCard } from '@/components/blog-card'
import { Blog } from '@/types/blog'
import blogsData from '@/data/blogs.json'

const categories = [
  { name: 'All', count: blogsData.length, color: 'bg-gray-500', emoji: '📚' },
  { name: 'AI & ML', count: blogsData.filter(blog => blog.category === 'AI & ML').length, color: 'bg-blue-500', emoji: '🤖' },
  { name: 'Web Development', count: blogsData.filter(blog => blog.category === 'Web Development').length, color: 'bg-green-500', emoji: '⚛️' },
  { name: 'Design', count: blogsData.filter(blog => blog.category === 'Design').length, color: 'bg-purple-500', emoji: '🎨' },
  { name: 'Blockchain', count: blogsData.filter(blog => blog.category === 'Blockchain').length, color: 'bg-yellow-500', emoji: '🔗' },
  { name: 'Sustainability', count: blogsData.filter(blog => blog.category === 'Sustainability').length, color: 'bg-emerald-500', emoji: '🌱' },
]

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs = selectedCategory === 'All' 
    ? blogsData as Blog[]
    : (blogsData as Blog[]).filter(blog => blog.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our content organized by topics that matter most in the tech world
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                selectedCategory === category.name
                  ? 'bg-white dark:bg-gray-800 ring-4 ring-blue-500 ring-opacity-50'
                  : 'bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center text-2xl`}>
                  {category.emoji}
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {category.count} posts
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-left">
                {category.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Selected Category Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {selectedCategory === 'All' ? 'All Posts' : selectedCategory}
            </h2>
            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
              {filteredBlogs.length} {filteredBlogs.length === 1 ? 'post' : 'posts'}
            </span>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 w-24"></div>
        </div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              There are no posts in the {selectedCategory} category yet.
            </p>
          </div>
        )}

        {/* Category Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Content Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat.name !== 'All').map((category) => (
              <div key={category.name} className="text-center">
                <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">{category.emoji}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
