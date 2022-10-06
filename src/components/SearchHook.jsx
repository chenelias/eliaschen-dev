import React, { useState } from 'react'
export function getStateSearch() {}

export function Search() {
    const [searchtext, setSearchText] = useState('')
    return { searchtext, setSearchText }
}

