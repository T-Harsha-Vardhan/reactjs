import "./App.css";
import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="bg-lightblue-50 h-screen w-screen">
      <UserProfile />
      <UpdateUser />
    </div>
  );
};

export default App;
