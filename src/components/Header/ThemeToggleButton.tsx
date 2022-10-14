import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from 'react-icons/io5/index.js'

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
      <div onClick={toggleTheme} className="duration-200 border border-slate-300 dark:border-zinc-700 cursor-pointer inline-flex items-center mt-[1px] p-[5px] rounded-md  bg-orange-100 bg-opacity-20 hover:bg-orange-300 dark:bg-purple-100  dark:hover:bg-purple-800 dark:bg-opacity-20">
      <button  className="text-dark dark:text-white text-2xl items-center">{theme==='dark'?<IoSunny/>:<IoMoon/>}</button>
     </div>
    </div>
  ) : (
    <div />
  )
}