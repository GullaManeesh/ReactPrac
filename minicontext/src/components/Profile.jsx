import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-center text-xl text-red-400 w-[300px]">
        please login!
      </div>
    );

  return (
    <div className="text-center text-xl  w-[300px] flex flex-col justify-evenly h-[200px]">
      username : {user.username}
    </div>
  );
}

export default Profile;
