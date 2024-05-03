import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function getCoverBlob(coverPath: Buffer): string {
  const blob = new Blob([coverPath], { type: 'image/jpeg' })
  return URL.createObjectURL(blob)
}

export function secondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  if (remainingSeconds < 10) {
    return `${minutes}:0${remainingSeconds}`
  }
  return `${minutes}:${remainingSeconds}`
}

export const uppercaseAlphabet = [
  '#',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

export function getFileNameWithoutExtension(filename: string): string {
  if (filename.indexOf('/') !== -1 || filename.indexOf('\\') !== -1) {
    const pathSeparator = filename.indexOf('/') !== -1 ? '/' : '\\'
    const basename = filename.split(pathSeparator).pop()
    return basename!.split('.').slice(0, -1).join('.')
  }
  return filename.split('.').slice(0, -1).join('.')
}
