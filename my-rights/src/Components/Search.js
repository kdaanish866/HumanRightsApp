import React from "react";
import "../Css/Search.css";

const Search=()=> {

    const submitHandler = e => {
        e.preventDefault();
    }


    return (
        <>
        <form className="form" onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Search</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='badge'>Badge Number:</label>
                    <input type="text" name="badge" id="badge" />
                </div>
                <input className="search-button" type="submit" value="Search"/>
            </div>
        </form>
        </>
    )
}

export default Search;