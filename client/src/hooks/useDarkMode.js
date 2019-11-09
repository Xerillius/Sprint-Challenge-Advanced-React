import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = (key, initVal) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initVal);
    useEffect(() => {
        let cards = document.querySelectorAll('.player-card');
        cards.forEach(item => {
            darkMode ? item.classList.add('dark-mode') : item.classList.remove('dark-mode');
        })
    }, [darkMode]);
    return [darkMode, setDarkMode];
}