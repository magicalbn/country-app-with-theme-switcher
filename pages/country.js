import React, { useState, useEffect } from 'react';
import Router from 'next/router'

import { getCountryDetails } from '../lib/countriesAPI';


import Layout from '../components/Layout'
import Border from '../components/UI/Border'
import Spinner from '../components/UI/Spinner'

const country = (props) => {
    const [countryDetails, setcountryDetails] = useState({})
    const [isloading, setisloading] = useState(true)
    const [error, seterror] = useState(null)


    useEffect(() => {
        seterror(null)
        getCountryDetails(props.code).then(Details => {
            setcountryDetails(Details)
            setisloading(false)
        }).catch(err => {seterror(err.response && err.response.status+" "+err.response.statusText || err); setisloading(false)})
    }, [props.code])


    const { code, border_countries = [], capital, currencies, flag, languages, name, native_name, population, region, subregion, toplevel_domain } = countryDetails


    /* let borderCountryNames =""
    border_countries.forEach(element => {
        borderCountryNames = element.
    }); */
    let currenciesList = ""

    let languageslist = ""
    let toplevel_domainlist = ""

    if (Object.keys(countryDetails).length) {

        currencies.forEach(each => {
            currenciesList = currenciesList + each.name + ", "
        })



        languages.forEach(each => {
            languageslist = languageslist + each.name + ", "
        })

        toplevel_domain.forEach(each => {
            toplevel_domainlist = toplevel_domainlist + each + ", "
        })

    }







    const backIcon = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>

    let content = <p className="error">{error}</p>
       
    

    if(!error)
        content = (
            <div className="container">
            <button className="back" onClick={() => Router.back()}>{backIcon} Back</button>
            <div className="country">
                <div className="country__flag">
                    <img src={flag}></img>
                </div>
                <div className="country__details">
                    <h1>{name}</h1>
                    <div className="section">
                        <div className="section__1">
                            <p><span>Native Name: </span>{native_name}</p>
                            <p><span>Population: </span>{population}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Subregion: </span>{subregion}</p>
                            <p><span>Capital: </span>{capital}</p>
                        </div>
                        <div className="section__2">
                            <p><span>Top Level Domain: </span>{toplevel_domainlist}</p>
                            <p><span>Currencies: </span>{currenciesList}</p>
                            <p><span>Languages: </span>{languageslist}</p>
                        </div>
                    </div>

                    <div className="border"><span>Border Countries: </span>
                        {
                            Object.keys(border_countries).map(each => {
                                return border_countries[each] && <Border key={border_countries[each]["alpha3-code"]} name={border_countries[each].country} code={border_countries[each]["alpha3-code"]} />
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
        )
    return (
        <Layout title={name ||  "Country"}>
            {
                isloading ? <Spinner /> : content

                    
            }
        </Layout>
    )
}

country.getInitialProps = ({ query }) => {
    const code = query.code;

    return { code }
}


export default country;