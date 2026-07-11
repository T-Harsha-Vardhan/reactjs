import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setPosts(data);
    };

    fetchData();
  }, []);

  return <div>{posts[0]?.title}</div>;
};

export default FetchDataEffect;
