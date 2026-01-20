function Cards(props) {  // we can also destructure this prop here only by writing {channel} and then we dont have to use props.channel. we can simply use username.
  console.log(props);
  
  return(
  <>
    <div>
      <h1>This is a card component.</h1>
      <p>this card can be used at several places. Making a component make it reusable and code effective.</p>
      <p>the channel from which I am learning react is : {props.channel} </p>
    </div>
  </>
  );
}

export default Cards;
