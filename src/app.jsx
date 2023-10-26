import React, { Component } from "react";

import { stories } from "./stories";

const customers = ["Agency", "Airlines", "Other Data Users"];
let selectedCustomer = ""
let filter = ""

function customerFilter() {
 if (selectedCustomer == "Agency"){
    filter = stories.filter(story => story.type == "agency")
 }
 if (selectedCustomer == "Airlines"){
    filter = stories.filter(story => story.type == "carrier")
 }
 if (selectedCustomer == "Other Data Users"){
    filter = stories.filter(story => story.type == "edu" )
 }
 else {
    filter = stories;
 }
}

function App() {
    customerFilter();
  return (
    <>
      <h1>Hey</h1>
      <div>
        {filter.map((story, i) => {
            console.log(story)
          return (
            <div key={i}>
              <div>{story.name}</div>
              <div>{story.type}</div>
              <p>{story.quote}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
