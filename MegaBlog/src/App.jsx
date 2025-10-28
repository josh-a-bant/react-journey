import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return Loading ? null : (
    <div className="bg-red-400 min-h-screen flex justify-center">
      <div className="flex flex-col m-10">
        <Header />
        <main>
          Todo: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
