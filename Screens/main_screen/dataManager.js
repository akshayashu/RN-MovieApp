import { GetServices } from "../../services/GetServices";

export const HandleGetMovies = async () => {
    let resp = await GetServices();
    return resp;
}