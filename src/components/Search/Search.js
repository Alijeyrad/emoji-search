import React, {useContext, useRef, useEffect} from 'react';
import './Search.css'
import EmojisContext from '../../contexts/EmojiContext'



const Search = () => {

  const { dispatchEmojis } = useContext(EmojisContext)

  const inputSearch = useRef(null)
  
  useEffect(() => {
    inputSearch.current.focus();
  }, [])

  const searchInputChange = (event) => {
    dispatchEmojis({
      type: 'SEARCH',
      query: event.target.value,
    });
  }

  return (
    <div className="search">
      <input ref={inputSearch} onChange={searchInputChange} type="text" placeholder="Search Emojis Here"/>
    </div>
  )
};

export default Search;