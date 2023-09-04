import { getInfo } from "../helpers/getInfo"

export const CountryCard = ({ cty }) => {
        
    return (
            <div className="card">
                <img src={ cty.flags.svg } className="card-img-top" alt="..." />
                <div className="card-body">
                      <h5 className="card-title"> { cty.name.common } </h5>
                      <p className="card-text">{ cty.flags.alt }</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Population: { cty.population }</li>
                  <li className="list-group-item">Language: { cty.languages.spa }</li>
                  <li className="list-group-item">Currenci: { getInfo(cty.currencies) }</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">More Information...</a>
                </div>
            </div>
    )
}
