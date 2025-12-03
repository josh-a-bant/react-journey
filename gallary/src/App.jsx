import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);

  const [page, setPage] = useState(2);

  const getData = async () => {
    const data = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    setUserData(data.data);
  };

  useEffect(
    function () {
      getData();
    },
    [page]
  );

  return (
    <>
      {/* <div className="bg-red-500 text-8xl text-center">JK</div> */}
      <div className="p-4 flex flex-col gap-4 justify-center items-center h-screen">
        <Card userData={userData} />

        <div className="flex gap-5 justify-center">
          <Buttons setPage={setPage} page={page}>
            prev
          </Buttons>
          <Buttons setPage={setPage} page={page}>
            next
          </Buttons>
        </div>
      </div>
    </>
  );
}

export default App;
