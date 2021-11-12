//create custom Express server that will interact with React client
//we will have 1 route that will display an array of customers
//require express
const express = require("express");

//initialize the app variable
const app = express();

//create route
app.get("/api/people", (req, res) => {
  //this part would come from a database in a full stack application
  const people = [
    {
      id: 1,
      fullName: "Françoise Bettencourt Meyers",
      netWorth: "$73.6 Billion",
      citizenship: "France",
      sourceofWealth: "L’oreal",
      image:
        "https://whatsthenetworth.com/wp-content/uploads/2021/07/Francoise-Bettencourt-Meyers.jpg",
    },

    {
      id: 2,
      fullName: "Alice Walton",
      netWorth: "$61.8 Billion",
      citizenship: "United States",
      sourceofWealth: "Walmart",
      image:
        "https://www.thefamouspeople.com/profiles/images/alice-walton-1.jpg",
    },

    {
      id: 3,
      fullName: "MacKenzie Scott",
      netWorth: "$53 Billion",
      citizenship: "United States",
      sourceofWealth: "Amazon",
      image:
        "https://assets.vogue.com/photos/5fde177d626ebdb4e428f745/master/pass/GettyImages-645681210_.jpg",
    },

    {
      id: 4,
      fullName: "Julia Koch",
      netWorth: "$46.4 Billion",
      citizenship: "United States",
      sourceofWealth: "Koch Industries",
      image:
        "https://financialslot.com/wp-content/uploads/2020/11/julia-koch-pix.jpg",
    },

    {
      id: 5,
      fullName: "Miriam Adelson",
      netWorth: "$38.2 Billion",
      citizenship: "United States",
      sourceofWealth: "Casinos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Miriam_Adelson_June_2019.jpg",
    },
  ];
  //using the .json() method we can turn the javascript object above into json format
  res.json(people);
});

//create port variable
const port = 5000;
app.listen(port, () => console.log(`Server is now listening on port ${port}`));
