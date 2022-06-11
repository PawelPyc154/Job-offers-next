// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  name: string
}

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getSession({ req })
  // @ts-expect-error
  MongoDBAdapter(clientPromise).deleteUser?.(session?.user?.id)
  // console.log(session.user.id)
  try {
    // await JobOffer.create({ title: 'tes' })
    res.status(201).json({ name: 'string' })
  } catch (error) {
    // console.log(error)
  }
}
