import { useState, useEffect } from "react";
import AdCard from "../components/AdCard";
import HeaderTyping from "../components/HeaderTyping";
import SearchBar from "../components/SearchBar";

import "../css/Home.css";

const Home = () => {
    const [ads, setAds] = useState([]);
    const clientAds = ads.filter(ad => ad.roleId === "c36e3ae1-fc25-4fb2-aa9b-4361bdebb149");
    const handymanAds = ads.filter(ad => ad.roleId === "da41c95b-b529-45c6-a0b9-b2f1263d9acf");
    const [isLoading, setIsLoading] = useState(true);

    console.log(ads);

    const loader = async () => {
        const req = await fetch("ads", {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        });
        if (req.ok) {
            setTimeout(setIsLoading(false), 0.1);
            const res = await req.json();
            setAds(res);
        } else {
            console.log("req is not ok");
            setAds([]);
        }
    };

    useEffect(() => {
        loader();
    }, []);

    return (
        <>
            <HeaderTyping />
            <SearchBar setAds={setAds} />
            <h2 className="text-center mb-5">Latest Ads</h2>
            <div>
                <h3 style={{marginLeft: "10%"}}>Client Ads</h3>
                <div className="ads-div container" id="client-ads">
                    {isLoading && clientAds.length === 0 && <h3>Loading ads...</h3>}
                    {(clientAds.length > 0 && !isLoading &&
                        clientAds.map((ad) => {
                            return <AdCard ad={ad} key={ad.id} />;
                        })) ||
                        (clientAds.length === 0 && !isLoading && <h3>No ads found!</h3>)}
                </div>
                <div id="pages-ads" style={{display: "inline-block", marginLeft: "45%"}}>
                <a href='#' className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                        Previous Page
                    </a>
                <a href='#' className='btn btn-info' style={{ color: 'white' }}>
                        Next Page
                    </a>
                </div>
                <br/>
                <h2 style={{marginLeft: "10%"}}>Handyman Ads</h2>
                <div className="ads-div container" id="handyman-ads">
                    {isLoading && handymanAds.length === 0 && <h3>Loading ads...</h3>}
                    {(handymanAds.length > 0 && !isLoading && 
                        handymanAds.map((ad) => {
                            return <AdCard ad={ad} key={ad.id} />;
                        })) ||
                        (handymanAds.length === 0 && !isLoading && <h3>No ads found!</h3>)}
                </div>
                <div id="pages-ads" style={{display: "inline-block", marginLeft: "45%"}}>
                <a href='#' className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                        Previous Page
                    </a>
                <a href='#' className='btn btn-info' style={{ color: 'white' }}>
                        Next Page
                    </a>
                </div>
            </div><br/>
        </>
    );
};

export default Home;
