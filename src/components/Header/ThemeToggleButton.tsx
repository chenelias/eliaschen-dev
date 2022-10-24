import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'
import { BsSun, BsMoon } from 'react-icons/bs/index.js'
const themes = ['light', 'dark']
export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(() => {
        if (import.meta.env.SSR) {
            return undefined
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    })
    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', t)
        setTheme(t)
    }

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'light') {
            root.classList.remove('dark')
        } else {
            root.classList.add('dark')
        }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? (
        <div>
            <button
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-[36px] h-[36px] rounded-lg flex ring-[1px] ring-gray-600  dark:ring-gray-200 items-center justify-center hover:ring-[3px] dark:hover:ring-gray-300 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                </svg>
            </button>
            {/* <div
                onClick={toggleTheme}
                className="duration-200 hover:border-[2px] hover:border-gray-500 border border-slate-300 dark:border-zinc-700 cursor-pointer inline-flex items-center mt-[1px] p-[5px] rounded-lg  bg-orange-100 bg-opacity-20 dark:bg-purple-100  dark:hover:bg-purple-800 dark:bg-opacity-20"
            >
                <button className="text-dark dark:text-white text-2xl p-[1.5px] items-center">
                    {theme === 'dark' ? <IoSunny /> : <IoMoon />}
                </button>
            </div> */}
        </div>
    ) : (
        <div />
    )
}
