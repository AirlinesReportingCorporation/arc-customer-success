import React, { useEffect, useState } from "react";

import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
  ProductLinks,
} from "arccorp-vars";
import Select from "react-select";
import { stories } from "./stories";
import CustomerSuccessCard from "./components/CustomerSuccessCard";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const customers = [{ value: "", label: "View All Customers" }].concat(
  [
    ...new Set(
      stories.map((story) => {
        return story.type;
      })
    ),
  ].map((customer) => {
    return { value: customer, label: toTitleCase(customer) };
  })
);

function createOptionList(arr, key) {
  return [{ value: "", label: "View All Products" }].concat(
    [
      ...new Set(
        arr.map((story) => {
          return story[key];
        })
      ),
    ].map((product) => {
      return { value: product, label: product };
    })
  );
}

let products = createOptionList(stories, "productName");

// let products = [{ value: "", label: "View All" }].concat(
//   [
//     ...new Set(
//       stories.map((story) => {
//        if(selectedCustomerFilter != ""){
//         if (story.type == "agency") {
//           return story.productName;
//         } else if (story.type == "airlines") {
//           return story.productName;
//         } else if (story.type == "other data users") {
//           return story.productName;
//         }
//        }
//        else {
//         return story.productName;
//       }
//       })
//     ),
//   ].map((product) => {
//     return { value: product, label: product };
//   })
// );

function App() {
  const [selectedCustomerFilter, setSelectedCustomerFilter] = useState("");
  const [selectedProdFilter, setSelectedProdFilter] = useState("");
  const [filteredStories, setFilteredStories] = useState(stories);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedProd, setSelectedProd] = useState("");
  const [prodList, setProdList] = useState(products);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    updateFilters();
  }, [selectedCustomerFilter, selectedProdFilter]);

  useEffect(() => {
    selectedProdFilter != "" ? "" : prodListFilter();
  }, [filteredStories]);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  function updateCustomer(event) {
    setSelectedCustomerFilter(event.value);
    setSelectedCustomer(event.value);
  }

  function updateProduct(event) {
    setSelectedProdFilter(event.value);
    setSelectedProd(event.value);
  }

  function clearFilter() {
    setSelectedCustomerFilter("");
    setSelectedProdFilter("");
  }

  function prodListFilter() {
    let filteredProd = createOptionList(filteredStories, "productName");
    setProdList(filteredProd);
  }

  function updateFilters() {
    if (selectedCustomerFilter != "" && selectedProdFilter != "") {
      setFilteredStories(
        stories.filter(
          (story) =>
            story.type == selectedCustomerFilter &&
            story.productName == selectedProdFilter
        )
      );
    } else if (selectedCustomerFilter != "" && selectedProdFilter == "") {
      setFilteredStories(
        stories.filter((story) => story.type == selectedCustomerFilter)
      );
    } else if (selectedProdFilter != "" && selectedCustomerFilter == "") {
      setFilteredStories(
        stories.filter((story) => story.productName == selectedProdFilter)
      );
    } else {
      setFilteredStories(stories);
    }
  }

  //Thinking of making a product array to then search in and replace.
  function replaceProduct() {
    if (prdouct == "ARC Direct Connect") {
      //replace the word with a link
    }
  }
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
              <div className="filter-area">
                <div className="customer-card-filter">Filter:</div>
                <div className="row align-items-baseline">
                  <div className="col-md-3">
                    <Select
                      unstyled
                      options={customers}
                      value={{
                        value: selectedCustomerFilter,
                        label:
                          selectedCustomerFilter == ""
                            ? "View All Customers"
                            : toTitleCase(selectedCustomerFilter),
                      }}
                      onChange={(e) => updateCustomer(e)}
                      className="customer-filter"
                    ></Select>
                  </div>
                  <div className="col-lg-3">
                    <Select
                      unstyled
                      options={prodList}
                      value={{
                        value: selectedProdFilter,
                        label:
                          selectedProdFilter == ""
                            ? "View All Products"
                            : selectedProdFilter,
                      }}
                      onChange={(e) => updateProduct(e)}
                      className="product-filter"
                    ></Select>
                  </div>
                  <div className="col">
                    <div className="clear-filters ctaBtn" onClick={clearFilter}>
                      Clear Filters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-md-12">
                  {filteredStories.map((story, i) => {
                    return (
                      <CustomerSuccessCard
                        key={i}
                        name={story.name}
                        type={story.type}
                        quote={story.shortQuote}
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
            <div className="col-lg-3">
              <a
                style={{display: "block", margin:"15px auto", padding: "0 15px", maxWidth: "350px"}}
                href="https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/?utm_source=customer_success_stories"
              >
                <img
                  style={{display: "block", width:"100%"}}
                  src="https://www2.arccorp.com/globalassets/homepage/redesign/banner.jpg"
                  alt="Aria Case Study"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
