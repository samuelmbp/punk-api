import { getFirstSentence } from "../../helpers/getFirstSentence";
import "./Card.scss";

type CardProps = {
    image?: string;
    name: string;
    tagline: string;
    description: string;
};

const Card = ({ image, name, tagline, description }: CardProps) => {
    return (
        <div className="card">
            <img className="card__image" src={image} alt={name} />

            <div className="card__details">
                <h2 className="card__title">{name}</h2>
                <span className="card__tagline">#{tagline} </span>
                <p className="card__description">
                    {getFirstSentence(description)}
                </p>
            </div>
        </div>
    );
};

export default Card;
