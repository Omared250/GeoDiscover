import { Link } from "react-router-dom";
import { Search } from "./Search";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="inner">
                <h1>THIS IS GEODISCOVER</h1>
                <p>
                    Discover the world like never before with GeoDiscover! Our intuitive web app provides detailed insights and captivating
                    images of countries worldwide, all at your fingertips. Unravel the hidden gems, explore diverse cultures, 
                    and embark on a virtual journey across the globe with GeoDiscover.
                </p>
            </div>
            <Link to="search">
                <button type="button" className="btn btn-light">Start Now!</button>
            </Link>
        </section>
    );
}
