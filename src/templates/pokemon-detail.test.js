/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonDetails from "./pokemon-details";

test("should render the pokemon details", () => {
  render(
    <PokemonDetails
      pageContext={{
        data: {
          id: "7",
          name: "pikachu",
          front_default: "test-url.png",
          height: "10",
          weight: "10",
          flavour_text_entry: {
            flavor_text: "Testing flavor text",
          },
        },
      }}
    />
  );

  const name = screen.getByTestId("name");
  const image = screen.getByAltText("pikachu");
  const number = screen.getByTestId("number");
  const height = screen.getByTestId("height");
  const weight = screen.getByTestId("weight");
  const flavor = screen.getByTestId("flavor");

  expect(name.textContent).toBe("pikachu");
  expect(image.src).toContain("test-url.png");
  expect(number.textContent).toBe("#007");
  expect(height.textContent).toBe("Height: 10");
  expect(weight.textContent).toBe("Weight: 10");
  expect(flavor.textContent).toBe("Testing flavor text");
});
