import { useState } from 'react'
import './App.css';


function App() {

  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'Solve for x: 2x + 5 = 10', answer: '2.5'},
    { id: 2, question: 'Factor this polynomial: x^2 - 20x + 75', answer: '(x - 5)(x + 15)'},
    { id: 3, question: 'Simplify the square root of 75', answer: '5 * sqr(3)'},
    { id: 4, question: 'What does P.E.M.D.A.S stand for?', answer: 'Parentheses, Exponents, Multiplication, Division, Addition, Subtraction'},
    { id: 5, question: 'Simplify the expression: 5m + 34 - 4m + 5', answer: 'm + 39'},
    { id: 6, question: 'Solve for x: 3x - 7 = 8', answer: '5'},
    { id: 7, question: 'What is the slope of the line y = 3x + 2?', answer: '3'},
    { id: 8, question: 'What is the y-intercept of the line y = 6x + 5?', answer: '5'},
    { id: 9, question: 'Simplify the expression: 3(x + 4) - 2(x - 3)', answer: 'x + 18'},
    { id: 10, question: 'Solve for x: 4(x + 3) = 28', answer: '4'}
  ]);

  const countFlashcards = () => {
    return flashcards.length;
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const toggleFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };


  return (
    <div className="App">
      <h1>Your Favorite Alge-Bro</h1>
      <h3>Let's see if you are an algebra wizard!</h3>
      <h3>Number of Cards: {countFlashcards()}</h3>
      <div className="flashcard-container" onClick={toggleFlip}>
        <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
          <div className="front">
            <p>{flashcards[currentIndex].question}</p>
          </div>
          <div className="back">
            <p>{flashcards[currentIndex].answer}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="button" onClick={handlePrev}>&#x2190;</button>
        <button className="button" onClick={handleNext}>&#x2192;</button>
      </div>
    </div>
  );
}

export default App
