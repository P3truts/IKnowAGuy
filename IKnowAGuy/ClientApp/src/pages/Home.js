import { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
import HeaderTyping from '../components/HeaderTyping';
import SearchBar from '../components/SearchBar';

import '../css/Home.css';

const Home = () => {
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const clientAds = ads.filter(ad => ad.roleId === "ff59a2c4-78a8-478c-8efd-ff322928526e");
    const handymanAds = ads.filter(ad => ad.roleId === "ab3e1019-d170-408d-a94f-8e85d2214081");

    console.log(ads);

    const loader = async () => {
        const req = await fetch('ads', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (req.ok) {
            const res = await req.json();
            setAds(res);
            setIsLoading(false);
        } else {
            console.log('req is not ok');
            setAds([]);
        }
    };

    useEffect(() => {
        loader();
    }, []);

    const options = [
        { value: '', text: 'Choose ads type' },
        { value: 'client', text: 'Client' },
        { value: 'handyman', text: 'Handyman' },
    ];

    const [selectedAdType, setSelectedAdType] = useState(options[0].value);
    const [adType, setAdType] = useState('');

    const handleAdsTypeFilter = (event) => {
        setSelectedAdType(event.target.value);
        setAdType([event.target.value]);
    };

    console.log('ad type is',adType);

    return (
        <>
            <HeaderTyping />
            <SearchBar setAds={setAds} />
            <h2 className="text-center mb-5">Latest Ads</h2>

            <div id="filter">

                <h2 style={{marginLeft: "10%"}}>Filter</h2>
                <select className='form-select' id='inputGroupSelectRole' value={selectedAdType} onChange={handleAdsTypeFilter} style={{width: "10%", marginLeft: "10%"}}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>


                <div>
                    {(adType == 'client' || adType == '') &&
                    (
                    <>
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
                    </>)
                    }

                    {(adType == 'handyman' || adType == '') &&
                    (<>
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
                    </>)
                    }
                </div>
                <br/>
            </div>
        </>
    );
};

export default Home;
