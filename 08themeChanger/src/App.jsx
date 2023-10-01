import { useCallback, useEffect, useState } from 'react'
import './App.css'
import TButton from './components/ThemeButton'
import Card from './components/Card'
import { ThemeProvider } from './context/theme';
// import ThemeProvider from './context/theme' // -> Wrong approach to import named export component

// In default export we need to import with any name and without curly brackets
// In named export we need to import with the same name within the curly brackets

function App() {
  
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  }

  const darkTheme = () => {
    setThemeMode('dark');
  }

  const changeThemeOnClick = useCallback(() => {
    const html = document.querySelector('html');
    html.classList.remove('light','dark');
    html.classList.add(themeMode);
  }, [themeMode])

  useEffect(changeThemeOnClick, [themeMode]);

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='flex justify-center items-center pt-5'>
          <TButton />
        </div>
        
        <div className='w-120 h-120 flex justify-center items-center mt-7 mb-20'>
          <Card />
        </div>
    </ThemeProvider>
  )
}

export default App
