import { User } from "./user";

export const saveToLocalStorage = <T,>(key: string, value: T): void => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
};

export const getFromLocalStorage = <T,>(key: string): string | null => {
    try {
        return localStorage.getItem(key);                
    } catch (error) {
        console.error('Error getting local storage', error);
        return null
    }
};