import React from "react";
import { render, screen } from '@testing-library/react';

import SelectMenu from "./SelectMenu";

describe("Testing select menu", () => {
  it("should render the component properly", () => {
    render(<SelectMenu options={["I am an option."]} label="I am a test!" />);
    const textLabel = screen.getByText('I am a test!');
    expect(textLabel.innerHTML).toBe("I am a test!");
  });
});