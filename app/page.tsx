'use client'

import { useState, useEffect } from 'react'
import { BlogCard } from '@/components/blog-card'
import { BlogHeader } from '@/components/blog-header'
import { SearchBar } from '@/components/search-bar'
import { CategoryFilter } from '@/components/category-filter'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Blog } from '@/types/blog'
import blogsData from '@/data/blogs.json'

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setBlogs(blogsData as Blog[])
      setFilteredBlogs(blogsData as Blog[])
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = blogs

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((blog: Blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((blog: Blog) => blog.category === selectedCategory)
    }

    setFilteredBlogs(filtered)
  }, [blogs, searchQuery, selectedCategory])

  const categories = ['All', ...Array.from(new Set(blogs.map((blog: Blog) => blog.category)))]

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            TechBlog Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge insights, development trends, and innovation stories 
            that shape the future of technology
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1 animate-slide-in-left">
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          
          <div className="animate-slide-in-right">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No blogs found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search query or category filter
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
