'use client'

import { BlogHeader } from '@/components/blog-header'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About TechBlog Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Your gateway to cutting-edge technology insights, development trends, and industry innovations that shape the digital world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                We're passionate about making complex technology accessible to everyone. Our mission is to bridge the gap between cutting-edge innovations and practical understanding.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you're a seasoned developer, a tech enthusiast, or someone curious about the digital revolution, we provide insights that matter.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold">Innovation</p>
                  <p className="text-lg opacity-90">Driven</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What We Cover */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Artificial Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Latest developments in AI, machine learning, and deep learning technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern frameworks, best practices, and emerging web technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Design & UX
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                User experience design, UI trends, and design system strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Blockchain
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cryptocurrency, DeFi, NFTs, and distributed ledger technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Green technology, sustainable development, and eco-friendly innovations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-indigo-100 dark:bg-indigo-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mobile Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mobile app development, cross-platform solutions, and device innovations.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every article is thoroughly researched and fact-checked to provide accurate, valuable information.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accessibility
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We make complex topics understandable for readers at all technical levels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We stay ahead of trends to bring you the latest developments in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
