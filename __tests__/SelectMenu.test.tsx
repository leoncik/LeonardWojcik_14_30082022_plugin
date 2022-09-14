import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import SelectMenu from '../lib/Components/SelectMenu/SelectMenu';

describe('Testing select menu', () => {
    it('should render the component properly', () => {
        render(
            <SelectMenu options={['I am an option.']} label="I am a test!" />
        );
        const textLabel = screen.getByText('I am a test!');
        expect(textLabel.innerHTML).toBe('I am a test!');
    });
});
