import { useState } from "react";

import "../css/SearchBar.css";

const SearchBar = ({ setAds }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const searchAds = async (searchTerm) => {
        var req;
        if (searchTerm === "") {
            req = await fetch(`ads`);
        } else {
            req = await fetch(`ads/search/${searchTerm}`);
        }

        if (req.ok) {
            var searchData = await req.json();
            setAds(searchData);
            console.log(searchData);
        } else {
            console.log("Request is nok");
            setAds([]);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeypress = (e) => {
        if (e.key === "Enter") {
            searchAds(searchTerm);
        } else {
            console.log("Key and term: ", e.key, searchTerm);
            searchAds(searchTerm);
        }
    };

    return (
        <div className="input-group input-group-lg search-bar" style={{width: "40%", scale: "140%"}}>
            <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Search for ads"
                value={searchTerm}
                onChange={handleChange}
                onKeyUp={handleKeypress}
            />
            <button
                type="button"
                className="btn"
                onClick={() => searchAds(searchTerm)}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
