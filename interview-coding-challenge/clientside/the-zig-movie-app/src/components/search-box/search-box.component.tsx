import * as React from "react";
import "./search-box.style.css";

const SearchBox: React.FC<any> = (props:any) => (
  <div className="search-box">

    <input
      onChange={props.handleChange}
      type="search"
      onClick ={props.onclick}
      className="search"
      placeholder="search for movies"
    />
  </div>
);
export default SearchBox;
 