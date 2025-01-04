"use client";

import { useQuery } from "@tanstack/react-query";
import userService from "../../services/service.user";

class UseQueryUsers {
    findAll = () => {
        return useQuery({
            queryKey: ["users"],
            queryFn: () => userService.findAll(),
            select: ({ data }) => data,
            retry: 3,
        });
    }
}

const useQueryUsers = new UseQueryUsers();
export default useQueryUsers;