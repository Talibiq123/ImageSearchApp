import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
    let [search, setSearch] = useState("");
    let [info, setInfo] = useState([]);


    async function getImages() {
        try{
            let request = await axios.get("https://api.unsplash.com/search/photos", {
                params: {
                    query: search
                },
                headers: {
                    authurization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
                }
                })
                console.log(request.data.results);
                setInfo(request.data.results);
        }
        catch(err){
            console.log(err);
        }
    }


    <div>
        <input type="text" placeholder="Search images..." 
            onChange={(e) => setSearch(e.target.value)} value={search}
        />
        <button onClick={getImages}>Search</button>
    </div>
}

export default SearchBar;