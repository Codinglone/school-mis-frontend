import axios from "axios";

const baseUrl = 'localhost:7000/api/v1/categories';

export const fetch = async(url) => {
    try {
        const response = await axios.get(url)
        return response;
    } catch (error) {
        return error;
    }
}
