import yelp from "../apis/yelp";
import React, { useEffect, useState } from "react";


export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
        console.log('hii')
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
            console.log('data', response.data.businesses)
        } catch (err) {
            setErrorMessage('Some thing went wrong');
        }
    };
    useEffect(() => {
        searchApi()

    }, [])

    return [searchApi, result, errorMessage]
}


