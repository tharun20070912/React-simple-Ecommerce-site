import React from 'react'
import './searchbar.css'
function Searchbar({searchupdate}) {
  return (
    <>
    <section id="searchbarcss"><h1>Product List</h1>
    <label>Search: <input id="searchInput" type="text" placeholder='Search for products..' 
                    onChange={(e)=>searchupdate(e.target.value)}></input></label></section>
    </>
  )
}

export default Searchbar;
