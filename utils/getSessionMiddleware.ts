// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server'

export const getSessionMiddleware = async (req: NextRequest) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, { headers: { cookie: req.headers.get('cookie') as string } })
  const data = await res.json()
  return Object.keys(data).length > 0 ? data : null
}
