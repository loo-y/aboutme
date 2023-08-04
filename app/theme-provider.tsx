'use client'

import { createContext, useState } from 'react'

export const ThemeContext = createContext({ dark: false })

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false)
    return (
        <ThemeContext.Provider value={{ dark: dark }}>
            <div
                className="w-16 h-5 fixed right-0 top-0 bg-transparent cursor-pointer text-transparent"
                onClick={() => {
                    setDark(!dark)
                }}
            >
                switch
            </div>
            <div className={`${dark ? 'dark bg-slate-800' : ''}`}>{children}</div>
        </ThemeContext.Provider>
    )
}
