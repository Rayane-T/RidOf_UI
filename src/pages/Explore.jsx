import React from "react";
import Navbar from "../components/Navbar"
import Searchbar from "../components/Searchbar";
import Cam from "../components/Cam"

export default function Explore (){
    return(
        <section>
            <Navbar/>
            <div className="container-explore">
                
                <div className="search-explore">
                    <h3>Recycle Location for your Object :</h3>
                    <Searchbar/>
                </div>
                <div className="take-a-pic-explore">
                    <h3>Take a Pic of your object :</h3>
                    <Cam/>
                </div>
                <div className="upload-explore">
                    <h3>Upload an existing image from your devices :</h3>

                </div>
            </div>
        </section>
    )
}