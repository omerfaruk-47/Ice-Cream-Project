<h1>Ice Cream Project</h1>

This project is an interactive web application where you can create a cart with various ice cream flavors and toppings. With its user-friendly interface, users can easily add, remove, and reset ice cream and topping items in their cart, and calculate the total price.

<h2>Features</h2>

- Ice Cream and Topping Options: Users can view and add various ice cream and topping items to their cart.
- Cart Management: Functions to add, remove, and reset items in the cart.
- Total Price Calculation: Dynamically calculates the total price of items in the cart.
- Form Control: Users can accept terms and conditions before confirming their order.

<h2>Project Structure</h2>

- Card Component
  The Card component represents the ice cream and topping items. Users can add or remove items from their cart using this component.

- Form Component
  The Form component allows users to accept terms and conditions before confirming their order.

- Scoops Component
  The Scoops component lists the available ice cream flavors and allows users to add them to their cart.

- Toppings Component
  The Toppings component lists the available toppings and allows users to add them to their cart.

<h2>API</h2>

This project uses Axios to fetch ice cream and topping data from a local server (http://localhost:4000). The following API endpoints are used:

- GET /scoops: Fetches the available ice cream flavors.
- GET /toppings: Fetches the available toppings.

<h2>Libraries Used</h2>

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

<h2>Screenshot</h2>

![](/public/ıce%20cream.gif)
# Ice-Cream-Project
