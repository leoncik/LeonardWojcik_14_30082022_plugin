# HRnet plugin

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of contents

-   [Description](#description)
    -   [Scenario](#scenario)
    -   [About the plugin](#about-the-plugin)
-   [How to use](#how-to-use)
    -   [Use the plugin in your project](#use-the-plugin-in-your-project)
    -   [Work on the plugin](#work-on-the-plugin)
        -   [Installation](#installation)
        -   [Visualize and edit the project](#visualize-and-edit-the-project)
        -   [Use the tests](#use-the-tests)
-   [Available properties](#available-properties)

## Description

### Scenario

**p14-hrnet-plugin** is a custom select menu component made specially for my [14th OpenClassrooms project](https://github.com/leoncik/LeonardWojcik_14_30082022_web-app). For this project I had to convert an old JQuery app into a React app.

The old app was relying on several JQuert plugins and I had to convert one into a React component library and host It as an npm package. I decided to convert the [selectmenu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js).

### About the plugin

In order to convert the original plugin into a React component, I had to make some changes to follow React's philosophy. However, I tried to keep the same structure and implement all the features that were present in the original plugin. I have also added additional features that I have considered useful to add (like a scroll bar when the list of options is long).

## How to use

### Use the plugin in your project

If you want to use this library in your (React) project, you can install It from the command line :

```
npm install @leoncik/p14-hrnet-plugin@0.0.5
```

Then, import the SelectMenu from the library and start using It :

```
import { SelectMenu } from '@leoncik/p14-hrnet-plugin';

function myComponent() {

    return (
        <div className="myComponent">
            <p>What is your favourite color?</p>
            <SelectMenu
                options={['Blue', 'Green', 'Red']}
            />
        </div>
    );
}

export default myComponent;
```

### Work on the plugin

#### Installation

1. Get this repository's content by [direct download](https://github.com/leoncik/LeonardWojcik_14_30082022_plugin/archive/refs/heads/main.zip) or by cloning It :

```sh
git clone https://github.com/leoncik/LeonardWojcik_14_30082022_plugin.git
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).

Then install the dependencies :

```sh
yarn install
```

3. You are ready to go!

#### Visualize and edit the project

You can visualize the changes made on the plugin easily with [storybook](https://storybook.js.org/) (It will act like a dev server). To run storybook, run :

```sh
yarn storybook
```

Once the changes are made and that you are ready to bundle the plugin, run `yarn build` to build It. It will now be ready to be published!

#### Use the tests

To run and watch the tests in the console, run : `yarn test`.

To get a coverage report while running the tests, run : `yarn coverage`. If you want to visualize the coverage report, you can run a live server (if you are using VSCode, I recommend using [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) and use this url : http://127.0.0.1:5500/coverage/

## Available properties

| Name           | Type    | Default                                    | Description                                                                                                                                                                                                   |
| -------------- | ------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options        | array   | null                                       | An array containing the list of options for the select menu.                                                                                                                                                  |
| optionsValues  | array   | null                                       | An array containing the options values for the select menu. If not set, the value of the select menu will be taken from the **option** property.                                                              |
| label          | string  | null                                       | Set the text content inside the button that triggers the select menu. By default It will use the first option as label.                                                                                       |
| id             | string  | null                                       | Set the _id_ of the select menu (useful to link to a label element).                                                                                                                                          |
| inputRef       | any     | null                                       | Set [ref](https://reactjs.org/docs/hooks-reference.html#useref) to the _select_ input element of the select menu. You can easily access the value of the input with something like : "yourRef.current.value". |
| width          | number  | 210                                        | The width of the menu, in pixels. When the value is _false_, a default width of 210px is used.                                                                                                                |
| maxHeight      | number  | 200                                        | The maximum height of the menu, in pixels. Only applied if the **scrollable** property is set to true.                                                                                                        |
| scrollable     | boolean | true                                       | Makes the menu scrollable (useful if there are many options).                                                                                                                                                 |
| offsetX        | number  | 0                                          | Offset of the menu on the X axis (negative values are allowed).                                                                                                                                               |
| offsetY        | number  | 0                                          | Offset of the menu on the Y axis (negative values are allowed).                                                                                                                                               |
| buttonIconPath | string  | "static/media/lib/assets/chevron-down.svg" | Path to the icon to be displayed in the select menu button.                                                                                                                                                   |
| className      | string  | "select-menu"                              | Class name of the select menu.                                                                                                                                                                                |
| showButtonIcon | boolean | true                                       | Hide or show the icon on the button of the select menu.                                                                                                                                                       |
