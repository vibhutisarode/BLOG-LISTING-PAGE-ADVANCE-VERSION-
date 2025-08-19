'use client'

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 flex items-center justify-center">
      <div className="relative animate-fade-in">
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Loading amazing content...
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Preparing the latest tech insights for you
          </p>
        </div>
      </div>
    </div>
  )
}
