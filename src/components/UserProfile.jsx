import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      {userData.user.name} {userData.user.age}
    </div>
  );
};

export default UserProfile;
