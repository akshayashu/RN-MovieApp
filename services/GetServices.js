import axios from "axios";

export const GetServices = async () => {
    let response = await axios.get('https://nativemovies.free.beeceptor.com/movies');
    return response.data
}