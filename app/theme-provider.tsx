'use client'
import { createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import SwitchDark from './components/SwitchDark'
export const ThemeContext = createContext({ dark: false })

const themeMode = {
    light: 'light',
    dark: 'dark',
}
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false)
    const mode = useSearchParams().get('mode')
    useEffect(() => {
        if (mode == themeMode.dark) {
            setDark(true)
        }
    }, [mode])

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
