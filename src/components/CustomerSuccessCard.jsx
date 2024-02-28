import React, {useState} from "react";

export default function CustomerSuccessCard(props) {
  const [toggleQuote, setToggleQuote] = useState(false);

  const toggleLongQuote = () => {
    setToggleQuote(!toggleQuote);
  }

  return (
    <div className="col-lg-12">
      <div className="customer-success-card">
        <div className="customer-success-card-inner">
          <p className={toggleQuote ? ( props.longQuote == props.quote? "customer-quote" : "customer-quote long-quote ") : (props.longQuote == props.quote ? "customer-quote": "customer-quote short-quote ")} onClick={toggleLongQuote}>"{toggleQuote ? props.longQuote : props.quote}"</p>
          <p>
            <b className="customer-name">{props.name}</b> &nbsp; <em className="customer-title">{props.title}</em> &nbsp;
            <span className="customer-company">{props.company}</span>
          </p>
          <a className="ctaBtn" href={props.productLink}>
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
