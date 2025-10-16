import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex items-center justify-evenly ">
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <div className="text-gray-200 text-4xl">
        Github followers: {data.followers}
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/josh-a-bant");
  return response.json();
};
