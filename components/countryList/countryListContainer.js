import React from 'react';

import CountryCard from './countryCard'

const CountryContainer = (props) => {

    const { countrylist, region, name } = props

    let regionFilteredlist = countrylist
    if (region != "") {

        regionFilteredlist = countrylist.filter(each => {
            return each.region == region;
        })
    }

    regionFilteredlist = regionFilteredlist.filter(each => {
        return each.name.toLowerCase().includes(name.toLowerCase())
    })


    
    return (

        <div className="country-list">
            
            {
                Object.keys(regionFilteredlist).length?
                Object.keys(regionFilteredlist).map(index => {
                    return <CountryCard key={regionFilteredlist[index].code} eachcountry={regionFilteredlist[index]} />
                })
                :<p className="error">No matching countries found . .</p>
            }

        </div>
    )
}

export default CountryContainer;