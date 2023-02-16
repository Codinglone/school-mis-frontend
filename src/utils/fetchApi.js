import axios from "axios";

export const fetch = async(url) => {
    try {
        const response = await axios.get(url)
        return response;
    } catch (error) {
        return error;
    }
}
