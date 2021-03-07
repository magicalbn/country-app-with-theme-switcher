import React from 'react';

const Menu = (props) => {

    return (
        <div className="menu">
            <p onClick={()=>props.changeRegion("")}>All Regions</p>
            <p onClick={()=>props.changeRegion("Africa")}>Africa</p>
            <p onClick={()=>props.changeRegion("Americas")}>America</p>
            <p onClick={()=>props.changeRegion("Asia")}>Asia</p>
            <p onClick={()=>props.changeRegion("Europe")}>Europe</p>
            <p onClick={()=>props.changeRegion("Oceania")}>Oceania</p>
            
        </div>
    )
}

export default Menu;