import { useState } from 'react';
import './App.css';
import Board from './Board';
import { IoMdClose } from 'react-icons/io';
import { FiCircle } from 'react-icons/fi';
import { winnerCheck } from './winnerCheck';

function App() {

  const [squares, setSquares] = useState([Array(9).fill(null)]);
  const [isPlayersMove, setIsPlayersMove] = useState(true);
  const XO = isPlayersMove ? <IoMdClose /> : <FiCircle />;
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if(squares[0][i]===null) {
      squares[0][i] = XO;
      setSquares(squares);
      if(winnerCheck(squares[0])){
        if(winnerCheck(squares[0])==='IoMdClose') {
          setWinner('X');
        } else if(winnerCheck(squares[0])==='FiCircle') {
          setWinner('O');
        } else if(winnerCheck(squares[0])==='tie') {
          setWinner('tie');
        }
      }
      setIsPlayersMove(!isPlayersMove);
    }
  }

  const handleReset = () => {
    setSquares([Array(9).fill(null)]);
    setWinner(null);
    setIsPlayersMove(true);
  }

  return (
    <div className="App">
      <Board squares={ squares[0] } onClick={ handleClick } />
      <div className={winner ? `winner ${winner}` : `winner`}>
        {winner==='X' ? 
          <h2>Player <IoMdClose /> won! <button onClick={handleReset}>Play Again!</button></h2> : 
        (winner==='O' ? 
          <h2>Player <FiCircle /> won! <button onClick={handleReset}>Play Again!</button></h2> : 
          <h2>It's a tie! <button onClick={handleReset}>Play Again!</button></h2>)}
      </div>
      <div className="footer">
        <p>&copy; 2022 Michał Kowalik</p>
      </div>
    </div>
  );
}

export default App;
