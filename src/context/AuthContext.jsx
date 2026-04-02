import React, { createContext, useState } from 'react'

export const Auth = createContext(null)

export default function AuthDetails({ children }) {
    const [user, setUser] = useState(localStorage.getItem('currentUserEmail') ?
    {email:localStorage.getItem('currentUserEmail')} : null)

    function signUp(email, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        if (users.find((u) => u.email === email)) {
            return { success: false, error: 'Account Already Exists' }
        }

        const newUser = { email, password }
        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return { success: true }
    }

    function signIn(email,password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const user = users.find((u) => u.email === email && u.password === password)
        if (!user) {
            return { success: false, error: 'Invalid Email and Password' }
        }

        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return { success: true }
    }

    function logOut() {
        localStorage.removeItem('currentUserEmail')
        setUser(null)
    }

    return <Auth.Provider value={{ signUp, signIn, logOut, user }}>{children}</Auth.Provider>
}


