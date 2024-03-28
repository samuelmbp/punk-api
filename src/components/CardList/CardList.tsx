import beers from "../../data/beers";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = () => {
    return (
        <section className="cards">
            {beers &&
                beers.map((beer) => (
                    <Card
                        key={beer.id}
                        image={beer.image_url}
                        name={beer.name}
                        tagline={beer.tagline}
                        description={beer.description}
                    />
                    // <div className="card" key={beer.id}>
                    //     <img
                    //         className="card__image"
                    //         src={beer.image_url}
                    //         alt={beer.name}
                    //     />

                    //     <div className="card__details">
                    //         <h2 className="card__title">{beer.name}</h2>
                    //         <span className="card__tagline">
                    //             #{beer.tagline}{" "}
                    //         </span>
                    //         <p className="card__description">
                    //             {getFirstSentence(beer.description)}
                    //         </p>
                    //     </div>
                    // </div>
                ))}
        </section>
    );
};

export default CardList;
