import React, { useEffect, useState, useRef } from 'react';

import Layout from '../components/Layout'
import { getAllCountries } from '../lib/countriesAPI'
import CountryContainer from '../components/countryList/countryListContainer'
import Menu from '../components/UI/Menu'
import Spinner from '../components/UI/Spinner'


const Home = () => {

    const [countriesList, setcountriesList] = useState([]);

    const [filterregion, setfilterregion] = useState("")
    const [inputname, setinputname] = useState("")
    const [filtername, setfiltername] = useState("")
    const [isloading, setisloading] = useState(true)

    const [error,seterror] = useState(null)

    const nameref = useRef();

    const dropdownIcon = <svg className="dropdown-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
    const searchIcon = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>

    useEffect(() => {
       
        getAllCountries().then(countries => {
            setcountriesList(countries);
            setisloading(false);
        })
            .catch(err => {seterror(err.response.status+" "+err.response.statusText);setisloading(false)})
            
    }, []);




    useEffect(() => {
        setTimeout(() => {
            if (inputname == nameref.current.value) {
                setfiltername(inputname)
            }
        }, 500);
        
      
    }, [inputname])


    const changeFilter = (region) => {
        setfilterregion(region)
    }

    let content =  <CountryContainer countrylist={countriesList} region={filterregion} name={filtername}/>

    if(error){
        content=<p className="error">{error}</p>
    }
    return (
        <Layout title="Where in the world?">
           
            <div className="container">

                <div className="search">
                    <form className="name" onSubmit={(event) => event.preventDefault()}>
                        {searchIcon}
                        <input type="search" ref={nameref} placeholder="Search for a country . . ." value={inputname} onChange={(event) => setinputname(event.target.value)}></input>
                    </form>
                    <div className="region">
                        <button className="filter-btn">{filterregion == "" ? "Filter by region" : filterregion} {dropdownIcon}</button>
                        <Menu changeRegion={changeFilter} />
                    </div>
                </div>
                {
                    isloading ? <Spinner /> : content
                }

            </div>
        </Layout>
    );

}

export default Home;