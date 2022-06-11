import { NextRequest, NextResponse } from 'next/server'
import { getSessionMiddleware } from 'utils/getSessionMiddleware'

export const middleware = async (req: NextRequest) => {
  const session = await getSessionMiddleware(req)

  if (session) {
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = '/sign-in'
  return NextResponse.redirect(url)
}
