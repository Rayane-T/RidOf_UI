import React from "react"
import ReactDOM from "react-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import FAQ from "./pages/FAQ"
import Item from "./pages/Item"

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

ReactDOM.render(
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Item" element={<Item />}/>
        <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
</Router>, document.getElementById("root"))