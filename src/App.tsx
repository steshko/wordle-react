import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Letter from './Letter';
import Row from './Row';

const word = 'Hello';

function App() {
    const [guesses, setGuesses] = useState<string[]>(Array.from(Array(6)))
    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if(gameOver) return;
            setGuesses((g) => {
                let currentGuess = g[currentWordIndex] ?? '';
                if(e.key === "Enter" && currentGuess.length === 5){
                    setCurrentWordIndex(currentWordIndex + 1);
                    if(currentGuess.toLowerCase() === word.toLowerCase()){
                        setGameOver(true);
                    }else if(currentWordIndex === 5){
                        setGameOver(true);
                    }
                }else if(e.key === "Backspace"){
                    currentGuess = currentGuess.slice(0, currentGuess.length - 1);
                }else if(currentGuess.length < 5 && e.key.length === 1){
                    currentGuess += e.key;
                }

                const retVal = [...g];
                retVal[currentWordIndex] = currentGuess;
                return retVal;
            })

        }
        window.addEventListener('keydown', handler);

        return () => window.removeEventListener('keydown', handler);
    }, [currentWordIndex, gameOver])

    return (
        <div className="app">
            {gameOver ? currentWordIndex > 5 ? <div>You Lost</div> : <div>You Won</div> : null}
            {guesses.map((itm, i) => <Row key={i} userInput={itm} word={word} validate={currentWordIndex > i}/>)}
        </div>

    );
}

export default App;
