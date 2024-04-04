import { Link, useParams } from "react-router-dom";
import "./BeerInfo.scss";
import Button from "../Button/Button";
import { Beer } from "../../types/types";

type BeerInfoProps = {
    beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
    const { id } = useParams<{ id: string }>();
    if (!id) return;

    const beerId = parseInt(id);
    const beer = beers
        .filter((beer) => beer.image_url)
        .find((beer) => beer.id === beerId);

    if (!beer) return <p>Beer not found!</p>;

    return (
        <section className="beer-info">
            <img src={beer.image_url} alt="" className="beer-info__image" />
            <div className="beer-info__card">
                <h2 className="card__title">{beer.name}</h2>
                <span className="card__tagline">#{beer.tagline} </span>
                <p className="card__description">{beer.description}</p>
                <p>
                    <span className="highlight">First Brewed:</span>{" "}
                    {beer.first_brewed}
                </p>
                <p>
                    <span className="highlight">Beer PH:</span> {beer.ph}
                </p>{" "}
                <p>
                    <span className="highlight">Food Pairing:</span>{" "}
                    {beer.food_pairing.join(", ")}
                </p>
                <p>
                    <span className="highlight">Brewers Tips:</span>{" "}
                    {beer.brewers_tips}
                </p>
                <br />
                <Link to={"/"}>
                    <Button label="Back to Beer List" />
                </Link>
            </div>
        </section>
    );
};

export default BeerInfo;
