import React from "react";

export default function CustomerSuccessCard(props) {
  return (
    <div className="col-lg-12">
      <div className="customer-success-card">
        <div className="customer-success-card-inner">
          <p className="customer-quote">"{props.quote}"</p>
          <p>
            <b className="customer-name">{props.name}</b> &nbsp; <em className="customer-title">{props.title}</em> &nbsp;
            <span className="customer-company">{props.company}</span>
          </p>
          <a className="ctaBtn" href={props.producLink}>
            {props.productName}
          </a>
        </div>
        <div className="customer-success-card-tag">
          {props.type} / {props.productName}
        </div>
      </div>
    </div>
  );
}
