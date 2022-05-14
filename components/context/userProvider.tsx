import React, { createContext, ReactNode, useContext, useState } from 'react'

const UserContext = createContext<User | null>(null)

type UserType = 'employer' | 'candidate'

interface User {
  id: number
  type: UserType
}
const user1 = {
  id: 1,
  type: 'employer' as UserType,
}
interface UserProviderProps {
  children: ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user] = useState<User | null>(user1)
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

const useUser = () => {
  const context = useContext(UserContext)

  // if (!context) {
  //   throw new Error('useUser must be used within a UserProvider')
  // }
  return context
}

export { UserProvider, useUser }
