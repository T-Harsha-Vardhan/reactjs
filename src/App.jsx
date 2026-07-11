import "./App.css";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./components/CounterEffect";
import FetchDataEffect from "./components/FetchDataEffect";

const App = () => {
  return (
    <div className="bg-lightblue-50 h-screen w-screen">
      {/* <BasicEffect /> */}
      {/* <CounterEffect /> */}
      <FetchDataEffect />
    </div>
  );
};

export default App;
