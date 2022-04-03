import React, { useState } from "react";

function Wallet() {
  const [count, setCount] = useState(1);
  console.log(count);
  return (
    <>
      <p className="font-700 primary_color my-0 font-lg">
        <span id="price">0.15</span> ETH
      </p>
      <div className="input__div col-5 d-flex margin_78">
        <div className="w-100">
          <input
            type="number"
            className="input__style w-100 px-2"
            placeholder="0"
            disabled={true}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column justify-content-center ">
          <button
            className="btn_plus"
            onClick={() => {
              if (count < 5) {
                setCount(parseInt(count) + 1);
              }
            }}
          >
            +
          </button>
          <button
            className="btn_minus"
            onClick={() => {
              if (count > 0) {
                setCount(parseInt(count) - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
      <button className="button btn my-3">Connect Wallet</button>
      <p className="primary_color font-lg font-700">
        <span>1003</span> / <span>1111</span>
      </p>
    </>
  );
}

export default Wallet;
