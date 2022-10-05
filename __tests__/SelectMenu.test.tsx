import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SelectMenu from '../lib/Components/SelectMenu/SelectMenu';
// Use 'resize-observer-polyfill' to fix 'ResizeObserver is not defined'.
global.ResizeObserver = require('resize-observer-polyfill');

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
        expect(menu.classList.contains('menu-open')).not.toBe(true);
    });

    it('should be opened after clicking on button', () => {
        render(<SelectMenu options={mockedOptions} label="Pick an option:" />);
        const button = screen.getByTestId('custom-button');
        button.click();
        const menu = screen.getByTestId('menu');
        expect(menu.classList.contains('menu-open')).toBe(true);
    });
});

describe("Testing menu's options display", () => {
    it('should display all provided options', () => {
        render(<SelectMenu options={mockedOptions} label="Pick an option:" />);
        screen.getAllByTestId('menu-item').map((option, index) => {
            expect(option.textContent).toBe(mockedOptions[index]);
        });
    });
});
