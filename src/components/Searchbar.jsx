import React from 'react'
import { HiSearch } from "react-icons/hi"

const Searchbar = () => {
    return (
        <section>
              <div class="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit" className = "container-button"><HiSearch/></button>
                </form>
             </div>
        </section>
    )
}
export default Searchbar;