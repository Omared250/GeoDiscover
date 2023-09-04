

export const CountryCard = ({ cty }) => {
        
    return (
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                      <h5 className="card-title"> { cty.name.common } </h5>
                      <p className="card-text">flag explanation</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Population: </li>
                  <li className="list-group-item">Language: </li>
                  <li className="list-group-item">Currenci: </li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">More Information...</a>
                </div>
            </div>
    )
}
