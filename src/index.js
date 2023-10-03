import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import {Book} from './book';


//MAIN RETURNING /RENDERING PART
const Booklist = () => {
  const getBook =(id) => { 
    const book = books.find((book) => book.id === id);
    console.log(book);
  }
  const someValue = 'shakeandbake'
  const displayValue = () => {
    console.log(someValue);
  }
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className='booklist'>
        <EventExamples />
        {books.map((book, index ) => {
          return <Book {...book} key={book.id} displayValue={displayValue} getBook={getBook} number={index} /> //spread operator
        })}
      </section>
    </>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.type);
    console.log("Form input");
  };
  const handleButtonClick = () => {
    alert("Button clicked");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button type='submit' onClick={handleFormSubmission}>
          submit
        </button>
        <div>
          <button onClick={handleButtonClick} type='button'>
            Click me
          </button>
        </div>
      </form>
    </section>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>
);

export default Booklist;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
