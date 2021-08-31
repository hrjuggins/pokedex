import * as React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        {
          name: `description`,
          content: "Pokedex app",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: "Pokedex app",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Harry Juggins`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: "Pokedex app",
        },
      ]}
    />
  );
};

export default SEO;
