import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoding] = useState();
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-bold">Order Successfull!</h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
