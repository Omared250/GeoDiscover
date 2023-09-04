import { useState } from "react"
import { CountryCard } from "./CountryCard";
import { getCountryByName } from "../api/getCountryByName";

export const Search = () => {

    const [ countries, setCountries ] = useState([]);
    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        const data = await getCountryByName(inputValue);
        setCountries(data);
        setInputValue('');
    };
    
    return(
        <>
            <div className="row search">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit } aria-label="form">
                        <input 
                            type="text"
                            placeholder="Search a country"
                            className="form-control"
                            autoComplete="off"
                            value={ inputValue }
                            onChange={ onInputChange }

                        />
                        <button className="btn btn-outline-primary mt-2">
                            search
                        </button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr />
                    <div className="alert alert-danger animate__animated animate__fadeIn"
                        aria-label="alert-danger" 
                        style={{ display: inputValue.length === 0 && countries.length === 0 ? '' : 'none' }}
                    >
                        No Country
                    </div>
                    {
                        countries.map(cty => (
                            <CountryCard key={ cty.name.common } cty={ cty } /> 
                        ))
                    }
                </div>
            </div>
        </>
    )
}
