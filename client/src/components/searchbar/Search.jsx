import React from "react";
import "./Search.scss";

const SearchBar = () => {

    return (
        <div className="search_bar">
            <div className="container">
                <h1>Find best renting house</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" srcset="" />
                        <input type="text" placeholder='Flat near Khargar station' />
                    </div>
                    {/* <button>Search</button> */}
                </div>
                <div className="find">
                    <span>Search :</span>
                    <button>Pg house</button>
                    <button>Rent House</button>
                    <button>Rent Flat</button>
                    <button>Hostels</button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;