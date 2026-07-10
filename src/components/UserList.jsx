const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Naman",
      age: 25,
    },
    {
      id: 2,
      name: "Bhargav",
      age: 26,
    },
    {
      id: 3,
      name: "Harsha",
      age: 24,
    },
  ];
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
