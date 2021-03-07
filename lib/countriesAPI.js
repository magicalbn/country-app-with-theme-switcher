import axios from 'axios'


export const getAllCountries = async () =>{
    const {data} = await axios.get("./countryApi");
    return data;
}


export const getCountryDetails = async (code) =>{
    const {data} = await axios.get(`./countryApi/alpha3code/${code}`);
    return data;
}