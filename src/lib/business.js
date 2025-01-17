import axios from 'axios';

const API_URL = 'https://small-filipino-business-database-production.up.railway.app/api/businesses/';

export const fetchBusinesses = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching businesses:", error);
        throw error;
    }
};
