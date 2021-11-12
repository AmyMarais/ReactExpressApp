//import styling
import "./people.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
//import hooks to use
import { useState, useEffect } from "react";
//import data fetching library - axios
import axios from "axios";

//create functional component
function People() {
  //set initial state
  //use useState hook to manipulate data
  const [people, setPeople] = useState([]);

  //use the useEffect hook to fetch data from the server
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/people");

      setPeople(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section>
        <h2>
          {" "}
          Top 5 Richest Females <AttachMoneyIcon fontSize="large" />{" "}
        </h2>
      </section>
      {people.map((item) => (
        <div id="card">
          <div id="cardContent" key={item.id}>
            <p> Name : {item.fullName}</p>
            <p> Net Worth : {item.netWorth}</p>
            <p> Citizenship : {item.citizenship} </p>
            <p> Source of Wealth : {item.sourceofWealth} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

//export component
export default People;
