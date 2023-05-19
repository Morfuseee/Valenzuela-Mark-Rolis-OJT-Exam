import { useState } from "react";
import { useEffect } from "react";
import mockData from '../../data/mockData.json';

function BottomHeader({deleteCheckedItems, checkboxStates, isCheckedAll, handleCheckAll}){


    return(
    <div className="bottom-header">
        <input type="checkbox" id="check-all" checked = {isCheckedAll} onChange = {handleCheckAll}/>
        <div className="buttons">
            <button className="publish">Publish</button>
            <button onClick={deleteCheckedItems} className="delete">Delete</button>
        </div>
        <div className="search-button">
            <form>
            <input type="text" className="search" name="query" placeholder="Search..." />
            </form>
        </div>
    </div>
    )
}

export default BottomHeader