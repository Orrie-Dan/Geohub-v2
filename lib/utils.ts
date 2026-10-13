import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes a public/ asset path (e.g. "/images/foo.jpg") with the deployment asset prefix.
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ""}${path}`
}

// Prefixes an in-app route (e.g. "/category/health") with the deployment prefix,
// so links resolve both locally (served at root) and in production (behind the /geohub proxy).
export function routePath(path: string) {
  return `${process.env.NEXT_PUBLIC_ASSET_PREFIX ?? ""}${path}`
}
