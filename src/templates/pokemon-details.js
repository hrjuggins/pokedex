import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const PokemonDetails = ({ pageContext: { data } }) => {
  console.log(data);
  return (
    <Layout>
      <div className="screen-container">
        <div className="details-top">
          <div className="details-top-left">
            <img src={data.front_default} alt={data.name} />
            <p>#{("000" + data.id).substr(-3)}</p>
          </div>
          <div className="details-top-right">
            <p className="title">{data.name}</p>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
          </div>
        </div>
        <p className="flavor-text">{data.flavour_text_entry["flavor_text"]}</p>
        <div className="list-container-bottom">
          <button>
            <Link to="/">...Back</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonDetails;
