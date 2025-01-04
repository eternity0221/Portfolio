/* eslint-disable @typescript-eslint/no-explicit-any */
export const getContentType = () => ({
    "Content-Type": "application/json",
    "Role": "admin",
});

export const errorCatch = (error: any): string => {

    const errorMessage = error?.response?.data?.message;

    return errorMessage
        ? typeof error.response.data.message === "object"
            ? errorMessage[0]
            : errorMessage
        : error.message;
}