import React from "react";
import "./search.css";
import { IoSearch } from "react-icons/io5";
export default function Search() {
    return (
        <div>
            <div className="searchbox w-[100%] h-[50px] bg-[#eee5e5] rounded-[15px] ">
                <input
                    className="w-[100%] h-[100%] rounded-[15px] "
                    type="text"
                    placeholder="search for product"
                />
                <button className="size-7 search-icon">
                    <IoSearch   size={15} />
                </button>
            </div>

        </div>
    );
}
