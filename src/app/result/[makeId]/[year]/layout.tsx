import { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

interface LayoutProps extends PropsWithChildren {
  params: {
    makeId: string
    year: string
  }
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { makeId, year } = await params

  return {
    title: `Results for ${makeId} model ${year}`,
    description: `Results page for ${makeId} ${year}. Browse models, specs, and more.`
  }
}

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}
