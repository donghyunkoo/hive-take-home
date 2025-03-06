# Hive AI 2025 Take-home

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Code

In the project directory, install the required packages using `npm install` and then run the program using:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Requirements
1) open and close – satisfied. Click on the select box to open the dropdowns.
2) single/multi select – satisfied. Pass the "multiple" prop to pick between a multi-select and a single-select.
3) select/deselect all – satisfied. In the multi-select dropdown, the first dropdown item is an option that allows the user to select or deselect all the options.
4) selected are visible when the dropdown is closed – satisfied. While the dropdown is closed, the user can hover over the select box. This opens a scrollable tooltip that shows all the selected options.
5) reusable / controlled – satisfied(?)
6) efficient rendering of large dropdown lists – satisfied. The component uses [React Window](https://github.com/bvaughn/react-window) in order to efficiently render only the dropdown items that are currently visible to the user.

## Design Choices
1) Instead of adding a checkbox (or similar) for selecting/deselecting all, I added an option at the top of the dropdown. I just thought that this made more sense and would be easier for users as well. This way they need to have the options visible to them (or some at least) before deciding to select / deselect all.
2) Using a tooltip for viewing all the options. I didn't think it would be a good idea if the select box's text field grew with the size of the input as the user is selecting items, and so I decided to keep everything to a single line and added the tooltip instead. I made the tooltip only visible when the dropdown isn't open so that it does not get in the way when the user is selecting items.
3) Using React Window. I've never used it before. I just saw it was recommended in a post online. I think it was a good choice for efficiently rendering the items as it only renders/updates the dropdown items that are currently visible.

## Future Improvements
If more time were made available to work on this take-home, I'd try to add features that make it more reusable/customizable. The goal was to make this seem like it's a component from a UI component library and so ease of use and customizability are pretty high priority in my opinion. 
Another thing I would add would be the ability to navigate through the options using the keyboard (arrow keys, enter, esc). It wasn't an essential feature so I planned to do it last, but ran out of time.
It wasn't specified, but I created a typescript project and so if I had time left over, I'd update all the any's with the proper typing. I'd also probably want to spend more time tuning the performance.
