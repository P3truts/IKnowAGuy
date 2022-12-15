import { useState, useRef, useEffect } from 'react';
import AdCard from '../components/AdCard';
import HeaderTyping from '../components/HeaderTyping';
import SearchBar from '../components/SearchBar';

import '../css/Home.css';

const Home = () => {
    const [searchedAds, setSearchedAds] = useState([]);
    const [searchedAdsPageNum, setSearchedAdsPageNum] = useState(1);
    const [isSearch, setIsSearch] = useState(false);
    const [homeSearchTerm, setHomeSearchTerm] = useState("");

    const [clientAds, setClientAds] = useState([]);
    const [clientPageNum, setClientPageNum] = useState(1);

    const [handymanAds, setHandymanAds] = useState([]);
    const [handymanPageNum, setHandymanPageNum] = useState(1);

    const [isLoading, setIsLoading] = useState(true);
    const firstRender = useRef(true);

    const clientAdsLoader = async () => {
        const req = await fetch(`ads?UserRole=Client&PageNumber=${clientPageNum}`, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (req.ok) {
            const res = await req.json();
            console.log(res);
            setClientAds(res);
            setIsLoading(false);
        } else {
            console.log('req is not ok');
            setClientAds([]);
        }
    };

    const previousClientPage = async () => {
        setClientPageNum(clientPageNum > 1 ? clientPageNum - 1 : 1);
    };

    const nextClientPage = async () => {
        if (clientAds.length > 0 )
        {
            setClientPageNum(clientPageNum+1);
        }
    };

    const previousHandymanPage = async () => {
        setHandymanPageNum(handymanPageNum > 1 ? handymanPageNum - 1 : 1);
    };

    const nextHandymanPage = async () => {
        if (handymanAds.length > 0 )
        {
            setHandymanPageNum(handymanPageNum+1);
        }
    };

    const previousSearchedAdsPage = async () => {
        setSearchedAdsPageNum(searchedAdsPageNum > 1 ? searchedAdsPageNum - 1 : 1);
    };

    const nextSearchedAdsPage = async () => {
        if (searchedAds.length > 0 )
        {
            setSearchedAdsPageNum(searchedAdsPageNum+1);
        }
    };

    const handymanAdsLoader = async () => {
        const req = await fetch(`ads?UserRole=Handyman&PageNumber=${handymanPageNum}`, {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (req.ok) {
            const res = await req.json();
            console.log(res);
            setHandymanAds(res);
            setIsLoading(false);
        } else {
            console.log('req is not ok');
            setHandymanAds([]);
        }
    };

    const searchAds = async () => {
        var req;
        if (homeSearchTerm === "") {
            setSearchedAds([]);
            setIsSearch(false);
            setIsLoading(false);
        } else {
            req = await fetch(`ads/search?searchTerm=${homeSearchTerm}&PageNumber=${searchedAdsPageNum}`);
            if (req.ok) {
                var searchData = await req.json();
                console.log('home search is reached');
                setSearchedAds(searchData);
                setIsSearch(true);
                setIsLoading(false);
            } else {
                console.log("Request is nok");
                setSearchedAds([]);
                setIsSearch(true);
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        clientAdsLoader();
        handymanAdsLoader();
        console.log(firstRender);
        if(firstRender.current == false)
        {
            searchAds();
        }
        firstRender.current = false;
    }, [clientPageNum, handymanPageNum, searchedAdsPageNum]);

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
            <SearchBar setSearchedAds={setSearchedAds} setIsSearch={setIsSearch} setIsLoading={setIsLoading} setHomeSearchTerm={setHomeSearchTerm} />

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
                    {(adType == 'client' || adType == '') && (!isSearch) &&
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
                    <a onClick={() => { previousClientPage() }} className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                            Previous Page
                        </a>
                    <a className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                        {clientPageNum}
                        </a>
                    <a onClick={() => { nextClientPage() }} className='btn btn-info' style={{ color: 'white' }}>
                            Next Page
                        </a>
                    </div>
                    <br/>
                    </div>)
                    }

                    {(adType == 'handyman' || adType == '') && (!isSearch) &&
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
                    <a onClick={() => { previousHandymanPage() }} className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                            Previous Page
                        </a>
                    <a className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                        {handymanPageNum}
                        </a>
                    <a onClick={() => { nextHandymanPage() }} className='btn btn-info' style={{ color: 'white' }}>
                            Next Page
                        </a>
                    </div>
                    </div>)
                    }

                    {(adType == 'handyman' || adType == '' || adType == 'client' ) && (isSearch) &&
                    (<div style={{backgroundColor: "whitesmoke", padding: "1%"}}>
                    <h2 style={{marginLeft: "10%", padding: "1%"}}>Search Results</h2>
                    <div className="ads-div container" id="searched-ads">
                        {isLoading && searchedAds.length === 0 && <h3>Loading ads...</h3>}
                        {(searchedAds.length > 0 && !isLoading && 
                            searchedAds.map((ad) => {
                                return <AdCard ad={ad} key={ad.id} />;
                            })) ||
                            (searchedAds.length === 0 && !isLoading && <h3>No ads found!</h3>)}
                        </div>
                    <div id="pages-ads" style={{display: "inline-block", marginLeft: "45%"}}>
                    <a onClick={() => { previousSearchedAdsPage() }} className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                            Previous Page
                        </a>
                    <a className='btn btn-info' style={{ color: 'white', marginRight: "4px" }}>
                        {searchedAdsPageNum}
                        </a>
                    <a onClick={() => { nextSearchedAdsPage() }} className='btn btn-info' style={{ color: 'white' }}>
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
