import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="w-screen flex justify-center items-center h-10 bg-gray-700 text-white text-xl">
      User: {userid}
    </div>
  );
}

export default User;
