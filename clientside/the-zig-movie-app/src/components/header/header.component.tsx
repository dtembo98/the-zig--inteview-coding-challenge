import * as React from "react";
import "./header.style.css";
import SearchBox from "../search-box/search-box.component";
const Header: React.FC<any> = (props: any) => (
  
  <div
    className="header"
    
    style={{
      background: `linear-gradient(to right, rgba(2,68,100, 0.8) 0%, rgba(2,68,100, 0) 100%),url('https://image.tmdb.org/t/p/w1280${props.heroimage ? props.heroimage.backdrop_path :'kqjL17yufvn9OVLyXYpvtyrFfak.jpg'}'), #1c1c1c`,
    
    }
  }
  >
    <div className="header-content">
     <p>
       <h1 >Welcome. </h1>
       <br/>
    <h2 className="header-content-text" >Millions of movies, TV shows and people to discover. <br/> Explore now. </h2>
     </p>
     
    <SearchBox className = "search-box" handleChange={props.handleChange} />
      {/* <div className="header-content-text">
        <h1>{props.heroimage.title}</h1>
        <p>{props.heroimage.overview}</p>
      
      </div> */}
      
    </div>
    
  </div>
);
export default Header;
