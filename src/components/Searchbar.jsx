import React, { useState, useEffect, Component } from 'react'
import { HiSearch } from "react-icons/hi"

const Searchbar = () => {
    const [data, setData] = useState('');
    const [items, setItems] = useState('');


    const SearchItem = async () =>  {
        const response = await fetch("http://127.0.0.1:5000/items", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: [data]})
        });
        const content = await response.json();
        setItems(JSON.stringify(content.data))
    }

    return (
        <section>
              <div class="search-container">
                <input type="text" placeholder="Search.." name="data" onChange={(e) => setData(e.target.value)}/>
                <button className = "container-button" onClick={() => SearchItem()}><HiSearch/></button>
             </div>
             <pre>{items}</pre>
        </section>
    )
}
export default Searchbar;