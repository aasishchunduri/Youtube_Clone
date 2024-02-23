import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQeury, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQeury]) {
        setSuggestions(searchCache[searchQeury]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQeury]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQeury);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQeury);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults({ [searchQeury]: json[1] }));
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-12 cursor-pointer"
          onClick={() => {
            toggleHandler();
          }}
          alt="hamburger-icon"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-12 mx-1"
            alt="youtube-icon"
            src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-12 justify-self-center w-5/6">
        <div>
          <input
            className="w-1/2 border border-gray-500 rounded-l-full p-2 "
            type="text"
            placeholder="Search"
            value={searchQeury}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-500 rounded-r-full px-2 py-2 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed rounded-lg shadow-lg w-[30rem] bg-white border border-gray-100 py-2 px-5 absolute">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-md hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
