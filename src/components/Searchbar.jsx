import React, { useState, useEffect, Component } from 'react'
import { HiSearch } from "react-icons/hi"

const Searchbar = () => {
    const [data, setData] = useState('');
    

    const SearchItem = async () =>  {
        const response = await fetch("http://127.0.1:5000/items", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: [data]})
        });
        const content = await response.json();
        console.log(content);
        setData("")
    }

    return (
        <section>
              <div class="search-container">
                <input type="text" placeholder="Search.." name="data" onChange={(e) => setData(e.target.value)}/>
                <button className = "container-button" onClick={() => SearchItem()}><HiSearch/></button>
             </div>
        </section>
    )
}
export default Searchbar;