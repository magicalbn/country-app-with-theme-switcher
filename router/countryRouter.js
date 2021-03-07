const express = require('express');
const { json, response } = require('express');
const axios = require('axios')

const countryNames = require('../data/countries.json')

let router = express.Router();

const ALL_COUNTRY_URL = 'https://restcountries.eu/rest/v2/all'
const COUNTRY_DETAILS_URL = 'https://restcountries.eu/rest/v2/alpha/'

const getAllCountries = async () => {
    try {
        const { data } = await axios.get(ALL_COUNTRY_URL)
        return data;
    }
    catch (error) {
        return error.response || error;
    }
}

const getCountryDetails = async (code) => {
    try {
        const { data } = await axios.get(COUNTRY_DETAILS_URL + code)
        return data
    }
    catch (error) {
        return error.response || error;
    }
}


router.get('/', (req, res) => {
    getAllCountries().then(response => {
        if (response.status && response.status >= 400) {
            res.status(response.status).send(response.data.message || "Some Unknown Error Occured")
        }
        else if (response.name && response.name == "Error") {
            res.status(404).send(response.message)
        }
        else {

            countryList = response.map(each => {

                return {
                    code: each.alpha3Code,
                    flag: each.flag,
                    name: each.name,
                    capital: each.capital,
                    region: each.region,
                    population: each.population
                }

            })
            res.json(countryList)
        }
    })

})



router.get('/alpha3code/:code', (req, res) => {
    getCountryDetails(req.params.code).then(response => {

        if (response.status && response.status >= 400) {
            res.status(response.status).send(response.data.message || "Some Unknown Error Occured")
        }
        else if (response.name && response.name == "Error") {
            res.status(404).send(response.message)
        } else {

            countryBorder = response.borders.map(eachCountry => {
                return countryNames.find(eachName => eachName['alpha3-code'] == eachCountry)
            })



            countryData = {
                code: response.alpha3Code,
                name: response.name,
                flag: response.flag,
                native_name: response.nativeName,
                population: response.population,
                region: response.region,
                subregion: response.subregion,
                capital: response.capital,
                toplevel_domain: response.topLevelDomain,
                currencies: response.currencies,
                languages: response.languages,
                border_countries: countryBorder,
            }


            res.json(countryData)
        }
    })
})


module.exports = router