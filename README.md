# HRnet plugin

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of contents

-   [Description](#description)
    -   [Scenario](#scenario)
    -   [About the plugin](#about-the-plugin)
-   [Plugin documentation](#plugin-documentation)
    -   [Properties](#properties)
-   [Tests documentation](#tests-documentation)

## Description

### Scenario

**p14-hrnet-plugin** is a custom select menu component made specially for my [14th OpenClassrooms project](https://github.com/leoncik/LeonardWojcik_14_30082022_web-app). For this project I had to convert an old JQuery app into a React app.

The old app was relying on several JQuert plugins and I had to convert one into a React component library and host It as an npm package. I decided to convert the [selectmenu](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js).

### About the plugin

In order to convert the original plugin into a React component, I had to make some changes to follow React's philosophy. However, I tried to keep the same structure and implement all the features that were present in the original plugin. I have also added additional features that I have considered useful to add (like a scroll bar when the list of options is long).

## Plugin documentation

## Properties

| Name      | Type   | Default       | Description                                                                                                                                                                                                   |
| --------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options   | array  | null          | An array containing the list of options for the select menu.                                                                                                                                                  |
| label     | string | null          | Set the text content inside the button that triggers the select menu. By default It will use the first option as label.                                                                                       |
| id        | string | null          | Set the _id_ of the select menu (useful to link to a label element).                                                                                                                                          |
| inputRef  | any    | null          | Set [ref](https://reactjs.org/docs/hooks-reference.html#useref) to the _select_ input element of the select menu. You can easily access the value of the input with something like : "yourRef.current.value". |
| width     | Number | 210           | The width of the menu, in pixels. When the value is _false_, a default width of 210px is used.                                                                                                                |
| className | string | "select-menu" | Class name of the select menu.                                                                                                                                                                                |

## Tests documentation

To run and watch the tests in the console, run : `yarn test`.

To get a coverage report while running the tests, run : `yarn coverage`. If you want to visualize the coverage report, you can run a live server (if you are using VSCode, I recommend using [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)) and use this url : http://127.0.0.1:5500/coverage/
