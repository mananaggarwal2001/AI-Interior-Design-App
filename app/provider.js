"use client" // this page will work on the client side as for the security purposes this page is formed.
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from './_context/UserDetailsContext.js'
const Provider = ({ children }) => {
    const { user } = useUser()
    useEffect(() => {
        user && verifyUser()
    }, [user])
    const [userdetails, setUserDetails] = useState({});

    const verifyUser = async () => {
        const value = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/verify-user`, { user: user })
        setUserDetails(value.data.result)
    }
    return (
        <UserDetailsContext.Provider value={{ userdetails, setUserDetails }}>
            <div>
                {children}
            </div>
        </UserDetailsContext.Provider>
    )
}

export default Provider
