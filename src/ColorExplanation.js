import React from "react";

export default function ColorExplanation() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", margin: "2%" }}>
        <div
          style={{ backgroundColor: "green", height: "30px", width: "120px" }}
        ></div>
        <p style={{ marginLeft: "10px" }}>-</p>
        <div>
          <h1
            style={{
              fontSize: "30px",
              marginLeft: "10px",
              position: "relative",
              bottom: "3px",
            }}
          >
            Superior
          </h1>
        </div>
      </div>
      <div style={{ display: "flex", margin: "2%" }}>
        <div
          style={{ backgroundColor: "red", height: "30px", width: "120px" }}
        ></div>
        <p style={{ marginLeft: "10px" }}>-</p>
        <div>
          <h1
            style={{
              fontSize: "30px",
              marginLeft: "10px",
              position: "relative",
              bottom: "3px",
            }}
          >
            Inferior
          </h1>
        </div>
      </div>
    </div>
  );
}
