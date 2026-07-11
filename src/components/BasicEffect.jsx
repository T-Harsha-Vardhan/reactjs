import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("effect ran...");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
