import { Link } from "react-router-dom";
import { Beer } from "../../types/types";
import Card from "../Card/Card";
import "./CardList.scss";
import placeholder from "../../assets/placeholder.png";

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
                            image={beer.image_url ?? placeholder}
                            name={beer.name ?? "Unknown Beer"}
                            tagline={beer.tagline ?? "#No Tagline Available"}
                            description={
                                beer.description ?? "No Description Available."
                            }
                        />
                    </Link>
                ))}
        </section>
    );
};

export default CardList;
