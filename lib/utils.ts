export function cn(...inputs: (string | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getReadingTime(minutes: number): string {
  return `${minutes} min read`
}
