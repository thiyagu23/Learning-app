import React from 'react';
import { useTheme } from './themeContext'; // Import the custom hook

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme(); // Get the theme and toggle function

    return (
        <div
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={toggleTheme}>
                Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default DarkModeToggle;