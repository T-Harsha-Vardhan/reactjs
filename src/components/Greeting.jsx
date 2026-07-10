const Greeting = () => {
  const name = "Harsha";
  const date = new Date();
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>
        {date.getDate()} {date.getMonth()} {date.getFullYear()}
      </p>
    </div>
  );
};

export default Greeting;
