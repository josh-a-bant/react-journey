import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex px-10 gap-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${activeTab == elem ? "bg-green-500" : "bg-neutral-500"} uppercase px-4 py-2 border-2 rounded cursor-pointer active:scale-95 text-white`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
