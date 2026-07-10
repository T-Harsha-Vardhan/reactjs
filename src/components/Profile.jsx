import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div className="bg-white h-full w-full flex">
      <div className="flex flex-col gap-4 bg-red-100 basis-1/2 justify-center items-center">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name here..."
          className="border border-gray-100 p-4"
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter age here..."
          className="border border-gray-100 p-4"
          value={profile.age}
          onChange={handleChange}
        />
      </div>
      <div className="bg-blue-50 basis-1/2 flex flex-col justify-center items-center">
        <h1>{profile.name}</h1>
        <p>{profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
