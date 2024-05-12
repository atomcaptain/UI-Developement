import logo from './logo.svg';
import './App.css';
import useLocalStorage from 'use-local-storage';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


function App() {

  let [theme, setTheme] = useLocalStorage('themes', false) //by default value is false (light -theme)


  // Create Handle to switch theme

  const handleToggle=(e)=>{
    setTheme(e.target.checked)
  }


  return ( 
    <div className="App" data-theme={theme?'dark':'light'} >
      {/* let's create simple UI We will use boostrap to create basic UI */}
      <div className='d-flex justify-content-center p-3'>
        <div>
          <Switch {...label} checked={theme} onClick={(e)=>{handleToggle(e)}} /> <span>{theme?'Dark':'Light'}</span>
        </div>

      </div>
      <div className='d-flex justify-content-center p-3'>

        <div className='buttonOuterDiv'>
          <button type='button' className='homebutton commonBtn'>Home</button>
          <button type='button' className='aboutbutton commonBtn  '>About</button>
        </div>

      </div>
      <div className='d-flex justify-content-center p-3'>
        <div className='prgOuterBody'>
          <p className='pragraph'>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
}

export default App;
