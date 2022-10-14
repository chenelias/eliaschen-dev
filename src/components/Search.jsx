import React from 'react'

const Search = () => {
    var inputsearch = document.getElementById("inputsearch").value
  return (
    <div>
        <input id='inputsearch' type="search" placeholder="Search Posts" />
    </div>
  )
}

export default Search