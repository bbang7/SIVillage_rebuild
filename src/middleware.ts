import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const { pathname, searchParams } = url

  if (pathname.startsWith('/product')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', '0')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  if (pathname.startsWith('/category')) {
    if (!searchParams.has('main')) {
      searchParams.set('main', '2')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }
  if (pathname.startsWith('/sign-in/find-account')) {
    if (!searchParams.has('target')) {
      searchParams.set('target', 'id')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }
  if (pathname.startsWith('/best/popular')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', 'ALL')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }
  if (pathname.startsWith('/best/gift')) {
    if (!searchParams.has('type')) {
      searchParams.set('type', 'ALL')
      url.search = searchParams.toString()
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/product/:path*', '/category/:path*', '/sign-in/find-account/:path*', '/best/:path*'],
}
