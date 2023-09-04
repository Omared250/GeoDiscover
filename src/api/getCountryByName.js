import axios from 'axios'

export const getCountryByName = async ( countryName ) => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        return data;
    } catch (error) {
        console.error(error);
    }
}
