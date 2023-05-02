import axios from "axios";

export const generalAxiosFetch = async (url: string, method: string, data?: unknown) => {
    const options = {
        method: method,
        url: url,
        data: data
    };

    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}