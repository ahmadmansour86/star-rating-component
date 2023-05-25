# Rating component documentation

The Rating component is a customizable star rating component built with React and Material-UI.

## Installation

To install the component, run the following command:

### `npm install`
### `npm install @mui/material`

Runs the app:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Props

| Prop | Type | Default value | Description |
| :---         |     :---      |     :---      |          :--- |
| precision   | number     | 1     | The precision of the rating value.    |
| totalStars     | number       | 5       | The total number of stars to display.      |
| emptyIcon     | element       | StarIcon       | The icon to display for empty stars.      |
| filledIcon     | element       | StarIcon       | The icon to display for filled stars.      |
| fontSize     | string       | 'medium'       | The font size for the stars. Can be 'small', 'medium', or 'large'.      |
| disabled     | boolean       | false       | Whether the rating is disabled.      |
| nonInteractive     | boolean       | false       | Whether the rating is non-interactive.      |
| defaultValue     | number       | 0       | The default rating value.      |
| caption     | boolean       | false       | Whether to display the rating value as a caption/text next to the stars.      |


## Example usage

`<Rating fontSize='small' />`
`<Rating disabled />`
`<Rating nonInteractive />`
`<Rating defaultValue={3.5} />`
`<Rating caption />`


Test the app:
### `npm test`

## Version history

1.0.0 - May 25, 2023
