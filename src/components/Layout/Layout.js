import React, { useEffect, useReducer } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import EmojiSection from "../EmojiSection/EmojiSection";
import EmojiContext from "../../contexts/EmojiContext";
import EmojiReducer from "../../reducers/Emojis.reducer"

const Layout = ({ children }) => {

  const [state, dispatch] = useReducer(EmojiReducer, {
    emojis: [],
    searchedEmojis: [{
      "title": "Loading",
      "symbol": "🔄",
    }],
    loading: false
  })

  const fetchEmojis = async () => {
    dispatch({
      type: 'FETCHING',
    });
    const response = await fetch(
      "https://run.mocky.io/v3/f6ca54f3-ec46-4694-b0de-8ca310f23e57"
    );
    const emojis = await response.json();
    dispatch({
      type: 'FETCHED',
      emojis: emojis,
    });
  };

  useEffect(() => {
    fetchEmojis();
  }, []);

  return (
    <EmojiContext.Provider
      value={{
        emojis: state.searchedEmojis,
        loading: state.loading,
        dispatchEmojis: dispatch
      }}
    >
      <Header />
      <Search />
      <EmojiSection />
    </EmojiContext.Provider>
  );
};

export default Layout;
