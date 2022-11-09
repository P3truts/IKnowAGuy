import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchapi from '../utils/fetchApi';
import FETCH_URL from '../AppFetchUrl';

const UpdateAd = () => {
    const { id } = useParams();
    const [ad, setAd] = useState({});

    useEffect(() => {
        fetchapi.get(`${FETCH_URL.ads}/${id}`).then((ad) => console.log(ad));
    });
};

export default UpdateAd;
