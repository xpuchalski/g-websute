import { useMemo } from 'react'

const imageModules = import.meta.glob(
  '../assets/**/*.{png,jpg,jpeg,webp,gif,avif}',
  { eager: true },
)

export function useCategories() {
  return useMemo(() => {
    const grouped = {}

    for (const [path, module] of Object.entries(imageModules)) {
      const match = path.match(/^\.\.\/assets\/([^/]+)\/([^/]+)$/)
      if (!match) continue

      const [, categoryName, fileName] = match
      if (!grouped[categoryName]) grouped[categoryName] = []

      grouped[categoryName].push({
        src: module.default,
        alt: fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      })
    }

    return Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, images]) => ({
        name,
        id: `category-${name.toLowerCase().replace(/\s+/g, '-')}`,
        images: images.sort((a, b) => a.alt.localeCompare(b.alt)),
      }))
  }, [])
}
