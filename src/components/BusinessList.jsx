import React, { useEffect, useState } from 'react';
import { fetchBusinesses } from './business';

const BusinessList = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        fetchBusinesses()
            .then(data => {
                console.log("Fetched data:", data);
                setBusinesses(data);
            })
            .catch(error => console.error("API error:", error));
    }, []);

    return (
        <div>
            <h1>Business List</h1>
            <ul>
                {businesses.map(business => (
                    <li key={business.business_id}>
                        <h2>{business.business_name}</h2>
                        <p>{business.description}</p>
                        <p>{business.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusinessList;