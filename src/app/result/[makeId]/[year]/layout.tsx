import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {
  params: {
    makeId: string
    year: string
  }
}

export function generateMedatada({ params }: LayoutProps): Metadata {
  const { makeId, year } = params

  return {
    title: `Results for ${makeId} ${year}`,
    description: `Results page for ${makeId} ${year}. Browse models, specs, and more.`
  }
}

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}
