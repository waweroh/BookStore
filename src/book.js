 //LOGIC PART
export const Book = (props) => {
  //props- render properties dynmlly in browser
  console.log(props);
  const { img, title, author, displayValue, getBook, id, number} = props; //destructuring props
  console.log(number);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <button onClick={displayValue}>click me</button>
      <button onClick={getSingleBook}> see book</button>
      <h2>{title}</h2>
      <h2> {author} </h2>
      <span className="number">{`# ${number + 1}` } </span>
    </article>
  );
};