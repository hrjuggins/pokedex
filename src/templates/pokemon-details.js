import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

const PokemonDetails = ({ pageContext: { data } }) => {
  return (
    <Layout>
      <SEO title={`Pokedex - ${data.name}`} />
      <div className="screen-container">
        <div className="details-top">
          <div className="details-top-left">
            <img src={data.front_default} alt={data.name} data-testid="image" />
            <p data-testid="number">#{("000" + data.id).substr(-3)}</p>
          </div>
          <div className="details-top-right">
            <p className="title" data-testid="name">
              {data.name}
            </p>
            <p data-testid="height">Height: {data.height}</p>
            <p data-testid="weight">Weight: {data.weight}</p>
          </div>
        </div>
        <p className="flavor-text" data-testid="flavor">
          {data.flavour_text_entry["flavor_text"]}
        </p>
        <div className="list-container-bottom">
          <Link to="/">...Back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonDetails;
