import React from "react";

const styles = {
  backgroundColor: "green",
};

function componentThree() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>componentThree</div>
      <div style={styles}>componentThree pt2</div>
    </>
  );
}

export default componentThree;
