
import axios from "axios";

const getCountryByName =  async (inputValue) => {
    console.log(inputValue);

    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${ inputValue }`);

        console.log(response.data);

    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

export default getCountryByName;

