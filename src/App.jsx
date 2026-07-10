import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <div>
      <Weather temp={38} />
      <UserStatus loggedIn isAdmin />
      <Greeting timeOfDay="afternoon" />
    </div>
  );
};

export default App;
