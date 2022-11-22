import '../css/Ad.css';

import { Link } from 'react-router-dom';
import { formatTime } from '../utils/helpers';

const AdCard = ({ ad }) => {
    return (
        <div className='card ad-card'>
            {ad.image && <img src={ad.image} alt='img'></img>}

            <div className='card-body'>
                <button type='button' className='btn'>
                    <Link to={`/ad-details/${ad.id}`} className='navbar-brand' style={{ color: 'black' }}>
                        {ad.name}
                    </Link>
                </button>
                <p className='card-text'>{ad.description}</p>
                <p className='card-text'>{formatTime(ad.date)}</p>
                <p className='card-text'>{ad.jobCategory.name}</p>
                <p className='card-text'>{ad.service.name}</p>
                <p className='card-text'>{ad.address.city}</p>
                <p className='card-text'>{ad.address.county}</p>
                <a href='#' className='btn ad-contact'>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default AdCard;
