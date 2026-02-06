import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/amantyagi09/repos")
  //     .then((response) => response.json())
  //     .then((repos) => {
  //       const repoNames = repos.map((repo) => repo.name);
  //       setData(repoNames);
  //     });
  // }, []);            // instead of this we can use loader in route and useLoaderData in component to fetch data and use it in component
  const data = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-gray-900 text-3xl font-bold">Github Repositories</h1>
      <div className="w-full max-w-2xl">
        {data.length > 0 ? (
          <ul className="grid gap-1">
            {data.map((repo, index) => (
              <li
                key={index}
                className="bg-gray-200  "
              >
                <span className="text-gray-800 font-medium">{repo}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Loading repositories...</p>
        )}
      </div>
    </div>
  );
}

export default Github;
