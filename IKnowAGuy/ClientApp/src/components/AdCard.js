import '../css/Ad.css';

import { Link } from 'react-router-dom';
import { formatTime } from '../utils/helpers';
import { useAtom } from 'jotai';
import state from "../state.js";

const AdCard = ({ ad }) => {
    const [user, setUser] = useAtom(state.user);

    return (
        <div className='card ad-card'>
            {ad.image && <img src={ad.image} alt='img'></img>}
            {!ad.image && <img src={`Assets/Placeholder_image.png`} alt='...' />}

            <div className='card-body'>
                <button type='button' className='btn' style={{ width: "100%"}}>
                    {(ad.username === user) && (<div style={{ display: "inline-block"}}>⭐</div>)}
                    <Link to={`/ad-details/${ad.id}`} style={{ fontSize: "20px", color: 'black', width: "100%", textDecoration: "none", marginLeft: "3px" }}>
                        {ad.name}
                    </Link>
                </button>
                <p className='card-text'>{ad.description.length > 40 ? ad.description.slice(0, 40) + "..." : ad.description}</p>
                <p className='card-text'>{formatTime(ad.date)}</p>
                <p className='card-text'>{ad.jobCategory.name}</p>
                {/* <p className='card-text'>{ad.service.name}</p> */}
                <p className='card-text'>{ad.address.city}</p>
                {/* <p className='card-text'>{ad.address.county}</p> */}
                <a href='#' className='btn ad-contact'>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default AdCard;
