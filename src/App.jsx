import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Person name="Harsha" age="24" />
      <Product name="Macbook" price="100000" />
    </div>
  );
};

export default App;
