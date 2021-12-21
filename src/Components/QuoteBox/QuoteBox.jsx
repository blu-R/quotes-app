import React from "react";

//COMPONENTS
import BtnNext from "../BtnNext/BtnNext";
import QuoteIcon from "../QuoteIcon/QuoteIcon";

//STYLES
import "./QuoteBox.styles.css";

function QuoteBox({ fGetQuote, quote, author, color }) {
    return (
        <div className="quote-container">
            <QuoteIcon size="5em" color={color} />
            <p style={{ color: color }} className="quote">
                {quote}
            </p>
            <p style={{ color: color }} className="author">
                {author}
            </p>
            <BtnNext fGetQuote={fGetQuote} size="3em" color={color} />
        </div>
    );
}

export default QuoteBox;
