import { Link } from "react-router-dom";
import { Beer } from "../../types/types";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    beers: Beer[];
};

const CardList = ({ beers }: CardListProps) => {
    const beersWithImages = beers.filter((beer) => beer.image_url);

    return (
        <section className="cards">
            {beersWithImages &&
                beersWithImages.map((beer) => (
                    <Link to={`/beer-info/${beer.id}`} key={beer.id}>
                        <Card
                            image={beer.image_url}
                            name={beer.name}
                            tagline={beer.tagline}
                            description={beer.description}
                        />
                    </Link>
                ))}
        </section>
    );
};

export default CardList;
