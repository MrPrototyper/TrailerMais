import axios from 'axios';
import { User } from './user';

const API_URL = 'http://localhost:8000/api/';

export const triggerLogin = async (loginInfo: { email: string, password: string }): Promise<User | null> => {
    const token = await axios.post(`${API_URL}token/`, { email: loginInfo.email, password: loginInfo.password });
    localStorage.setItem('token', JSON.stringify(token.data));
    const body = { email: loginInfo.email };

    const response = await axios.post(`${API_URL}user/get-by-email/`, body, {
        headers: {
            Authorization: `Bearer ${token.data.access}`
        },
    });

    return response.data;
};

export const postUserData = async (user: { email: string, password: string }): Promise<User> => {
    const response = await axios.post(`${API_URL}user/`, user);

    return response.data;
}