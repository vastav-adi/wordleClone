import './Assets/App.css';
import './Assets/bootstrap.min.css'
import { useEffect, useState } from 'react'
import GridComponent from './Components/Grid/GridComponent';
import KeyboardComponent from './Components/KeyboardComponent';

const App = () => {
  const [key, setKey] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  useEffect(()=>{
    if(gameOver){
      console.log("game over bitches");
    }
  },[gameOver])

  const gameConditionCallback = () =>{
    setGameOver(true)
  }

  const dataBindCallback = (e) => {
    let arr = [];
    arr.push(e.target.value)
    setKey(arr)
  }

  return (
    <div className='body'>
      <div className='game-container'>
        <div className='game-header'>
          <div>
            WORDLE
          </div>
        </div>
        <div className='game-body'>
          <GridComponent input={key} callback={gameConditionCallback} gameOver={gameOver}/>
        </div>
        <div className='game-keyboard'>
          <KeyboardComponent callBackFunction={dataBindCallback} />
        </div>

      </div>
    </div>
  );
}

export default App;
