"use client";
import axiosInstance from "../../app/api/api.interceptor";
import { UserManyResponseIF } from "../../entities/interfaces/user.interface";

class UserService {
    findAll = async () => {
        return await axiosInstance.get<UserManyResponseIF>("/users");
    }

    // create = async (data:EventCreateIF) => {
    //     return await axiosInstance.post<EventIF>("/events", data);
    // }

    // update = async (id:string|number, data:EventUpdateIF) => {
    //     return await axiosInstance.patch<EventIF>(/events/${id}, data);
    // }

    // remove = async (id:string|number) => {
    //     return await axiosInstance.delete(/events/${id});
    // }
}

const userService = new UserService();
export default userService;