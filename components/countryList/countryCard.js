import React from 'react';
import Router from 'next/router'

const CountryCard = (props) => {

    const { code, flag, name, population, region, capital } = props.eachcountry;

  

    return (
        <div className="country-card" onClick={()=>Router.push({pathname:'/country',query:{code:code}})}>
            <img src={flag} alt="flag"></img>
            <div className="card-details">
                <h3>{name}</h3>
                <p><span>Population: </span>{population}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>
            </div>
        </div>
    )

}

export default CountryCard;