import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/GullaManeesh")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <div className="bg-gray-700">
      <div className="flex items-center justify-center bg-gray-700 text-white text-2xl p-4">
        Github Followers: {data.followers}
      </div>
      <div>
        <img src={data.avatar_url} alt="dp" className="w-{300}" />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/GullaManeesh");
  return response.json();
};
