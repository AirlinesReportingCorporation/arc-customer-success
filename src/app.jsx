import React from "react";

import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";

import { stories } from "./stories";
import CustomerSuccessCard from "./components/CustomerSuccessCard";

const customers = ["Agency", "Airlines", "Other Data Users"];
let selectedCustomer = "";
let filter = "";

function customerFilter() {
  if (selectedCustomer == "Agency") {
    filter = stories.filter((story) => story.type == "agency");
  }
  if (selectedCustomer == "Airlines") {
    filter = stories.filter((story) => story.type == "carrier");
  }
  if (selectedCustomer == "Other Data Users") {
    filter = stories.filter((story) => story.type == "edu");
  } else {
    filter = stories;
  }
}

//Thinking of making a product array to then search in and replace. 
function replaceProduct() {
  if (prdouct == "ARC Direct Connect") {
    //replace the word with a link
  }
}

function App() {
  customerFilter();
  return (
    <div className="arc-customer-succcess">
      <Stickynav
        className="bg-color-teal"
        pageLink="#top"
        title="Customer Success Stories"
        stickyCTA="View Products"
        stickyCTALink="https://www2.arccorp.com/products-participation/products/"
      />
      <ProductJumbo
        className="customer-success-jumbo"
        backgroundImage="https://www2.arccorp.com/globalassets/homepage/redesign/customersuccess-2x.jpg"
        title={
          <>
            Customer <br />
            Success Stories
          </>
        }
        subtitle={
          <>
            Learn how customers are using{" "}
            <span>
              ARC’s products to drive efficiencies, increase revenue, and
              improve their
            </span>{" "}
            businesses, as well as the industry as a whole.
          </>
        }
        ctaTitle="Share Your Story"
        ctaLink="http://www2.arccorp.com/products-participation/customer-success-stories#feedback-form"
      />
      <div className="success-story-section">
        <div className="success-story-section-inner">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="customer-card-filter">Filter:</div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-12">
                  {filter.map((story, i) => {
                    console.log(story);
                    return (
                      <CustomerSuccessCard
                        key={i}
                        name={story.name}
                        type={story.type != "carrier" ? story.type : "Airlines"}
                        quote={story.quote}
                        title={story.title}
                        company={story.company}
                        productLink={story.productLink}
                        productName={story.productName}
                        product={story.product}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
