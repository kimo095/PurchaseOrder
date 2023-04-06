# Getting Started with Create React App
live page link:
"http://kimo095.github.io/PurchaseOrder"
npx create-react-app [name_of_the_APP]
# About the App
This is a React application that displays a list of purchase orders in and allows the user to click on an order to view its details.
The list of purchase orders is loaded from a JSON file named "purchase.json" and is displayed using the map function. 
Each order is displayed as a link, and when clicked, the user is taken to the "App.js" component where the details of the selected order are displayed.

The "App.js" component retrieves the id of the selected order from the Json file using the "useParams" hook provided by the "react-router-dom" library. It then retrieves the selected order from the "data" object using the id and displays its details in a table.

The application uses the Bootstrap CSS library for styling, which is imported from the "bootstrap/dist/css/bootstrap.min.css" file.
# How project is related to my CV
On my CV, I have indicated that I possess skills in working with HTML, CSS (including Bootstrap), and JavaScript. Furthermore, I have utilized the React library in the development and display of this particular application.
