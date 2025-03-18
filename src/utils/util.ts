import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseTryJson(text: string) {
  try {
    return JSON.parse(text)
  }
  catch {
    return undefined
  }
}
