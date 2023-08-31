import { useState } from "react"
import getCountryByName from "../api/countryApi";

export const Search = () => {
    const [ inputValue, setInputValue ] = useState("");

    const onInputChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value.toLowerCase().trim());
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();

        getCountryByName(inputValue);
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

                    <div>

                    </div>

                </div>
            </div>
        </>
    )
}
