import { getToken } from 'next-auth/jwt'

import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const session = await getToken({ req, secret: process.env.SECRET })

  if (!session) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = '/'
  return NextResponse.redirect(url)
}
