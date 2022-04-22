const EmojiReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        emojis:[],
        loading: true,
      };

    case "FETCHED":
      return {
        ...state,
        loading: false,
        emojis: [...action.emojis],
        searchedEmojis: [...action.emojis],
      };

    case "SEARCH":
      const results = [];
      const query = action.query;
      if (query === "") {
        return {
          ...state,
          searchedEmojis: state.emojis,
        };
      } else {
        for (let item of state.emojis) {
          if (item.keywords.search(query.toLowerCase()) !== -1) {
            results.push(item);
          }
        }
        return {
          ...state,
          searchedEmojis: results,
        };
      }
  }
};

export default EmojiReducer;
