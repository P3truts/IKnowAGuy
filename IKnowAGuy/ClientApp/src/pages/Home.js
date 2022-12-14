import { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
import HeaderTyping from '../components/HeaderTyping';
import SearchBar from '../components/SearchBar';

import '../css/Home.css';

const Home = () => {
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const clientAds = ads.filter(ad => ad.userRole === "Client");
    const handymanAds = ads.filter(ad => ad.userRole === "Handyman");

    const loader = async () => {
        const req = await fetch('ads', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (req.ok) {
            const res = await req.json();
            console.log(res);
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

    const adTypeOptions = [
        { value: '', text: 'Choose ad type' },
        { value: 'client', text: 'Client' },
        { value: 'handyman', text: 'Handyman' },
    ];

    const [selectedAdType, setSelectedAdType] = useState(adTypeOptions[0].value);
    const [adType, setAdType] = useState('');

    const handleAdTypeFilter = (event) => {
        setSelectedAdType(event.target.value);
        setAdType([event.target.value]);
    };

    const jobTypeOptions = [
        { value: '', text: 'Choose job type' },
        { value: 'job1', text: 'Job1' },
        { value: 'job2', text: 'Job2' },
    ];

    const [selectedJobType, setSelectedJobType] = useState(jobTypeOptions[0].value);
    const [jobType, setJobType] = useState('');

    const handleJobTypeFilter = (event) => {
        setSelectedJobType(event.target.value);
        setJobType([event.target.value]);
    };

    return (
        <>
            <HeaderTyping />
            <SearchBar setAds={setAds} setIsLoading={setIsLoading} />

            <div id="main-container">
                {/* <h2 className="text-center mb-5">Latest Ads</h2> */}
                <div id="filter-container" style={{display: "inline-block", padding: "1%", paddingLeft: "10%", width: "100%"}}>

                    <h2>Filter</h2>
                    <select className='form-select' id='inputGroupSelectAdType' value={selectedAdType} onChange={handleAdTypeFilter} 
                        style={{width: "165px", display: "inline-block", marginRight: "4px"}}>
                        {adTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>

                    {/* <select className='form-select' id='inputGroupSelectJobType' value={selectedJobType} onChange={handleJobTypeFilter} 
                        style={{width: "165px", display: "inline-block", marginRight: "4px"}}>
                        {jobTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select> */}

                </div>
                <div id="ads">
                    {(adType == 'client' || adType == '') &&
                    (
                    <div className="bg-light" style={{padding: "1%"}}>
                    <h3 style={{marginLeft: "10%", padding: "1%"}}>Client Ads</h3>
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
                    </div>)
                    }

                    {(adType == 'handyman' || adType == '') &&
                    (<div style={{backgroundColor: "whitesmoke", padding: "1%"}}>
                    <h2 style={{marginLeft: "10%", padding: "1%"}}>Handyman Ads</h2>
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
                    </div>)
                    }
                </div>
                <br />
            </div>
        </>
    );
};

export default Home;
