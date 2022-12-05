import { useState } from "react";

import "../css/SearchBar.css";

const SearchBar = ({ setAds, setIsLoading }) => {
    const [searchTerm, setSearchTerm] = useState("");
    
    var test;

    const searchAds = async (searchTerm) => {
        var req;
        if (searchTerm === "") {
            req = await fetch(`ads`);
            if (req.ok) {
                var searchData = await req.json();
                setAds(searchData);
                setIsLoading(false);
                test = searchData;
                console.log('search data:', searchData);
            } else {
                console.log("Request is nok");
                setIsLoading(false);
                setAds([]);
            }
        } else {
            req = await fetch(`ads/search/${searchTerm}`);
            if (req.ok) {
                var searchData = await req.json();
                setAds(searchData);
                setIsLoading(false);
                test = searchData;
                console.log('search data:', searchData);
            } else {
                console.log("Request is nok");
                setIsLoading(false);
                setAds([]);
            }
        }

        console.log('request', req);

    };

    console.log('search data 2:', test);

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
