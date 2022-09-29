import React from 'react';
import { screen, render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SelectMenu from '../lib/Components/SelectMenu/SelectMenu';

const mockedOptions = ['Option 1', 'Option 2', 'Option3'];

describe("Testing select menu's button text", () => {
    it('should render the label if provided properly', () => {
        render(<SelectMenu options={mockedOptions} label="Pick an option:" />);
        const textLabel = screen.getByText('Pick an option:');
        expect(textLabel.innerHTML).toBe('Pick an option:');
    });

    it('should render the first option if no label is provided', () => {
        render(<SelectMenu options={mockedOptions} />);
        const textLabel = screen.getByTestId('custom-button-text');
        expect(textLabel.innerHTML).toBe(mockedOptions[0]);
    });
});

describe("Testing menu's visibility", () => {
    it('should not be opened by default', () => {
        render(<SelectMenu options={mockedOptions} label="Pick an option:" />);
        const menu = screen.getByTestId('menu');
        expect(menu.classList.contains('menu-expanded')).not.toBe(true);
    });

    it('should not be opened after clicking on button', () => {
        render(<SelectMenu options={mockedOptions} label="Pick an option:" />);
        const button = screen.getByTestId('custom-button');
        act(() => {
            /* fire events that update state */
            button.click();
            // fireEvent.click(button);
        });
        // const menu = screen.getByTestId("menu");
        // expect(menu.classList.contains('menu-expanded')).toBe(true)
    });
});
