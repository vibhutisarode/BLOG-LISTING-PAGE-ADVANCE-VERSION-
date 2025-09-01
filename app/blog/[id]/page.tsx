import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '@/types/blog'
import { formatDate, getReadingTime } from '@/lib/utils'
import blogsData from '@/data/blogs.json'
import BlogDetailClient from './blog-detail-client'

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

// Generate static params for all blog IDs
export async function generateStaticParams() {
  return (blogsData as Blog[]).map((blog) => ({
    id: blog.id,
  }))
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = (blogsData as Blog[]).find(b => b.id === params.id)
  
  if (!blog) {
    return notFound()
  }

  return <BlogDetailClient blog={blog} />
}
