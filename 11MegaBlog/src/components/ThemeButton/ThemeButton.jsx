import React, { useEffect } from 'react'
import '../../index.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/authSlice.js';

function ThemeButton() {
    
    const themeMode = useSelector(state => state.auth.themeMode);

    const dispatch = useDispatch();

    const changeTheme = (e) => {
        dispatch(toggleTheme());
    };

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove('dark','light');
        html.classList.add(themeMode);
    }, [themeMode]);

    return (
        <label className=" ml-2 relative inline-flex my-auto justify-center items-center cursor-pointer">
            
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={changeTheme}
                checked = {themeMode === 'dark'}
            />

            <div className="w-11 h-6 bg-purple-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-2 text-sm w-[2rem] font-medium text-slate-600 dark:text-white">

                {`${themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}`}

            </span>
        </label>
    )
}

export default ThemeButton