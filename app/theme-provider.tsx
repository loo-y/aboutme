'use client'
import { createContext, useState } from 'react'
import SwitchDark from './components/SwitchDark'
export const ThemeContext = createContext({ dark: false })

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false)
    return (
        <ThemeContext.Provider value={{ dark: dark }}>
            <div className="fixed right-3 top-2 cursor-pointer z-[999]">
                <SwitchDark
                    initSwitch={dark}
                    callback={isDark => {
                        setDark(isDark)
                    }}
                />
            </div>
            <div className={`${dark ? 'dark bg-slate-800' : ''}`}>{children}</div>
        </ThemeContext.Provider>
    )
}
