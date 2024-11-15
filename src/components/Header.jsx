import React from 'react';
import{ useState, useEffect } from 'react';
function Github() {
    return (
        <i className="ri-github-fill" onClick={() => window.location.href = 'https://github.com/Priyansh7999/TASK-MANAGER-FLARELINK'} style={{ cursor: 'pointer' }}></i>
    );
}

function Theme() {
    const [darkTheme,setDarkTheme] = useState(false);

    const toggleTheme = () => {
        const root = document.documentElement;
        const currentBlack = getComputedStyle(root).getPropertyValue('--color-black').trim();
        
        // Toggle the colors
        if (currentBlack === 'black') {
            root.style.setProperty('--color-black', 'white');
            root.style.setProperty('--color-white', 'black');
            setDarkTheme(true);
        } else {
            root.style.setProperty('--color-black', 'black');
            root.style.setProperty('--color-white', 'white');
            setDarkTheme(false);
        }

    };

    return (
            <i 
            className={darkTheme ? "ri-sun-line" : "ri-moon-line"} 
            onClick={toggleTheme} 
            style={{ cursor: 'pointer' }}
        ></i>
    );
}

/**
 * Header component renders the header section of the Task Manager application.
 * It includes a title and a GitHub icon.
 */
export default function Header() {
    return (
        <div className="header">
            <h1>TASK MANAGER</h1>
            <Theme />
            <Github />
        </div>
    );
}
