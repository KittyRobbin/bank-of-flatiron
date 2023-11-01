# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial
data! 

## Instructions

For this project, you’ll be building out a React application that displays a
list of your recent bank transactions, among other features.

One of the key aspects being evaluated in this code challenge is your ability to follow provided instructions. While you have freedom in implementing the features, it is important to thoroughly read and follow the provided setup guidelines.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `3001`.
3. In a new terminal, run `npm start`. This will run your React app on port `3000`.

Make sure to open
[http://localhost:3000/transactions](http://localhost:3000/transactions) in the
browser to verify that your backend is working before you proceed!


## Endpoints

The base URL for your backend is: `http://localhost:3001`

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **the new transaction does not have to be persisted to the backend*
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]


#### POST `/transactions`

Required Headers:

js
{
  "Content-Type": "application/json"
}


Request Object:

json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}


Example Response:

json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}


## Author

-[Elizabeth](https://github.com/KittyRobbin)

## Technologies Used

The project was built using the following technologies:

- React.js
- Node.js
- JSON Server
- HTML/CSS
- GitHub

## contribution

-Daniel Karanja(https://github.com/Daniel-Karanja)



