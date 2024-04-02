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
                    <Card
                        key={beer.id}
                        image={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        description={beer.description}
                    />
                ))}
        </section>
    );
};

export default CardList;
