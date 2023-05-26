# Rating component documentation

The Rating component is a customizable star rating component built with React and Material-UI.

## Installation

To install the component, run the following command:

### `npm install`
### `npm install @mui/material`
### `npm install @material/tooltip`
### `npm install @mui/icons-material`
### `npm install @material/typography`

Runs the app:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Props

| Prop | Type | Default value | Description |
| :---         |     :---      |     :---      |          :--- |
| precision   | number     | 1     | The precision of the rating value. Can be 1, 0.5, 0.25 or 0.1    |
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


## Test the app:
### `npm test`




## DOM APIs used for implement a half star:
clientX: According to the W3C docs, this is defined as: “The horizontal coordinate at which the event occurred relative to the viewport associated with the event.”

getBoundingClientRect: According to the MDN docs, this is defined as: “The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.”



## Version history

1.0.0 - May 25, 2023
