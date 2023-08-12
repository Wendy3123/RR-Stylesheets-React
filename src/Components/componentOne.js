import React from "react";

const styles = {
  backgroundColor: "#E0B0FF",
};

function componentOne() {
  return (
    <>
      <div style={{ backgroundColor: "hotpink" }}>componentOne</div>
      <div style={styles}>componentOne pt2</div>
    </>
  );
}

export default componentOne;
