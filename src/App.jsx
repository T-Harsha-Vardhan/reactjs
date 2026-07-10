import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  return (
    <div className="bg-lightblue-50 h-screen w-screen">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      <ShoppingList />
    </div>
  );
};

export default App;
