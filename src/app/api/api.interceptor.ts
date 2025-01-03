import axios from "axios";
import { errorCatch, getContentType } from "./api.helper";
// import { clearStorage, getTokens } from "@process/services/oauth/oauth.helper";
// import oauthService from "@process/services/oauth/service.oauth";

const axiosInstance  = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 2000,
    headers: getContentType(),
});

axiosInstance.interceptors.request.use(async config => {

    // const tokens = getTokens();

    // if (config.headers && tokens.accessToken){
    //     config.headers.Authorization = Bearer ${tokens.accessToken};
    // }

    return config;
});

axiosInstance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config;
    if (
        error.response.status === 401 ||
        errorCatch(error) === "jwt expired" ||
        errorCatch(error) === "jwt must be provided" &&
        error.config && !error.config._isRetry
    ) {
        originalRequest._isRetry = true;
        // try{
        //     await oauthService.getNewTokens();
        //     return axiosInstance.request(originalRequest);
        // } catch(error){
        //     if (errorCatch(error) === "jwt expired")
        //         clearStorage();
        // }
    }
    return error;
})

export default axiosInstance;