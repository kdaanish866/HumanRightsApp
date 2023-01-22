import React from "react";
import "../Css/Search.css";


const Search = () => {
    return (
        <div className="wrapper">
      <h1>Officer Registration</h1>
      <form >
      <fieldset>
         <label>
           <p>Officer Name</p>
           <input name="name" />
         </label>
         <button type="submit">Submit</button>

         <label>
           <p>Badge Number</p>
           <input name="name" />
         </label>
         <button type="submit">Submit</button>
       </fieldset>
      </form>
    </div>
    
        

  );
};
export default Search;