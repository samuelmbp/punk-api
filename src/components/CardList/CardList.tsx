import beers from "../../data/beers";
import "./CardList.scss";

const CardList = () => {
    return (
        <section className="card-list">
            {beers &&
                beers.map((beer) => (
                    <div className="card-list__item" key={beer.id}>
                        <img
                            className="card-list__item-image"
                            src={beer.image_url}
                            alt={beer.name}
                        />
                        <h2 className="card-list__item-name">{beer.name}</h2>
                        <span className="card-list__item-tagline">
                            #{beer.tagline}
                        </span>
                        <p className="card-list__item-description">
                            {beer.description}
                        </p>
                    </div>
                ))}
        </section>
    );
};

export default CardList;
