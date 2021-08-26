import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const Pokemon = ({ pageContext: { data } }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const listRef = useRef(null);

  // Always filter the full list of pokemon
  const dataList = data.filter((pokemonEach) =>
    pokemonEach.name.includes(search.toLowerCase())
  );

  // Pagination variables
  const perPage = 10;
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  // created paginated data from the filtered list
  const paginatedData = dataList.slice(firstIndex, lastIndex);

  return (
    <Layout>
      <div className="screen-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Pokemon name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <div className="list-container" ref={listRef}>
          <ul>
            {/* Filter paginated data by search term and map results*/}
            {paginatedData.map((pokemon) => {
              return (
                <li key={`pokemon-${pokemon.name}`}>
                  <Link to={`/${pokemon.name}`} className="list-item">
                    <img src={pokemon.front_default} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-container-bottom">
          <button
            disabled={page <= 1}
            onClick={() => {
              setPage(page - 1);
              // Scroll list to top
              listRef.current.scrollTo(0, 0);
            }}
          >
            ...Prev
          </button>
          <button
            disabled={Math.floor(page >= dataList.length / perPage)}
            onClick={() => {
              setPage(page + 1);
              // Scroll list to top
              listRef.current.scrollTo(0, 0);
            }}
          >
            Next...
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;
