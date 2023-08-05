'use client'
import { useEffect, useState } from 'react'
interface SwitchDarkProps {
    initSwitch?: boolean
    callback?: (isDark: boolean) => void
}

const SwitchDark = ({ initSwitch = false, callback }: SwitchDarkProps) => {
    const [isSwitch, setIsSwitch] = useState(initSwitch)
    const handleSwitch = () => {
        setIsSwitch(!isSwitch)
        if (callback) callback(!isSwitch)
    }
    useEffect(() => {
        setIsSwitch(initSwitch)
    }, [initSwitch])
    return (
        <div
            className={`w-14 h-7 bg-slate-400 bg-opacity-50  rounded-2xl  py-0.5 px-[0.2rem] flex relative cursor-pointer ease-linear duration-500 ${
                isSwitch ? 'shadow-slate-300/50 shadow-md' : 'shadow-slate-500/50 shadow-lg'
            }`}
            onClick={handleSwitch}
        >
            {isSwitch ? (
                <div className="w-6 h-6 bg-slate-800 rounded-full p-1 ease-linear duration-300 ml-[1.65rem]">
                    <img src="./misc/moon.svg" alt="dark" />
                </div>
            ) : (
                <div className="w-6 h-6 bg-gray-100 rounded-full p-1 ease-linear duration-300 ml-0">
                    <img src="./misc/sun.svg" alt="light" />
                </div>
            )}
        </div>
    )
}

export default SwitchDark
