import React from "react";

const styles = {
  backgroundColor: "green",
};

function componentOne() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>componentOne</div>
      <div style={styles}>componentOne pt2</div>
    </>
  );
}

export default componentOne;
