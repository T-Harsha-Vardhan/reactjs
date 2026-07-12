import { useContext } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <button
        onClick={() => {
          userData.setUser({
            name: "Bhargav",
            age: 26,
          });
        }}
        className="bg-blue-500 px-4"
      >
        Update user
      </button>
    </div>
  );
};

export default UpdateUser;
