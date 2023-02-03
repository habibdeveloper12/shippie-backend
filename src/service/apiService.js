import axios from 'axios';

const getShippingRate = async (data) => {
    try {
        const res = await axios.get("http://localhost:8300/getShippingRate");
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

export default getShippingRate;
