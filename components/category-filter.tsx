'use client'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-400 dark:text-gray-500">🔽</span>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
