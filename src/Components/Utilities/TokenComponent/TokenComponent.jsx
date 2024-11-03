import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = tokenString;
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        try {
            localStorage.setItem('token', userToken.token);
            setToken(userToken.token);
        }catch (err) {
            console.log("Err:" + err)
        }
    };

    return {
        setToken: saveToken,
        token
    }
}