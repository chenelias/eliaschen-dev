import React, { useState } from 'react'
const Search = () => {
    const [searchtext, setSearchText] = useState('')

    return (
        <div>
            <input
                type="text"
                placeholder="Search Posts"
                className="input-search inline-flex justify-center rounded-md border-2 border-zinc-400 p-3 text-xl font-medium shadow-sm hover: dark:hover:bg-zinc-700 hover:bg-orange-100 bg-orange-50 dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 focus:ring-offset-orange-50 transition-all"
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
          
        </div>
    )
}

export default Search
