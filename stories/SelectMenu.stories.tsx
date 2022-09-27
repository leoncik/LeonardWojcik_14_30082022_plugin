import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectMenu from '../lib/Components/SelectMenu/SelectMenu';
import customIcon from './assets/colors.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/SelectMenu',
    component: SelectMenu,
} as ComponentMeta<typeof SelectMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectMenu> = (args) => (
    <SelectMenu {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    options: ['Ceramic', 'Glass', 'Paper', 'Plastic', 'Stone', 'Wood'],
};

export const Scrollable = Template.bind({});
Scrollable.args = {
    label: 'Select a composer',
    options: [
        'Arensky',
        'Bach',
        'Beethoven',
        'Brahms',
        'Chopin',
        'Czerny',
        'Debussy',
        'Fibich',
        'Haydn',
        'Kalkbrenner',
        'Mozart',
        'Prokofiev',
        'Rachmaninov',
        'Ravel',
        'Satie',
        'Schubert',
        'Schumann',
        'Sibelius',
        'Stanchinsky',
        'Tchaïkovsky',
        'Verdi',
        'Vivaldi',
        'Weber',
    ],
};

export const EmptyOptions = Template.bind({});
EmptyOptions.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'No one shall trigger me!',
    options: ['Magic mushroom', 'Fairy powder', 'Excalibur'],
    width: 400,
    disabled: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
    label: 'What is your favourite colour?',
    options: ['Blue!', 'Green', 'Red', 'Yellow', "I don't know!"],
    width: 340,
    buttonIconPath: customIcon,
    rotateButtonIcon: false,
    optionsFontSize: '24px',
};

export const CustomColorsAndOffsetY = Template.bind({});
CustomColorsAndOffsetY.args = {
    options: [
        'Branchiura',
        'Hexapoda',
        'Mystacocarida',
        'Ostracoda',
        'Thecostraca',
    ],
    rotateButtonIcon: false,
    offsetY: 6,
    optionsFontSize: '18px',
    mainColor: '#0ebbb2',
    optionTextColor: 'crimson',
    optionTextFocus: 'white',
    buttonTextColor: '#007062',
    buttonTextHoverColor: 'white',
    buttonBackgroundHoverColor: '#19c0aa',
    buttonTextActiveColor: '#1521c2',
};

export const LongText = Template.bind({});
LongText.args = {
    label: 'Pick an inspiring quote',
    options: [
        'Coffee is a beverage that puts one to sleep when not drank',
        'Children find everything in nothing; men find nothing in everything.',
        'I bear the wounds of all the battles I avoided.',
        'Who let the fridge open?',
    ],
    width: 250,
    optionsFontSize: '18px',
};
