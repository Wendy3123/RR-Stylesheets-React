import React from "react";

const styles = {
  backgroundColor: "lightpink",
};

function componentThree() {
  return (
    <>
      <div style={{ backgroundColor: "plum" }}>componentThree</div>
      <div style={styles}>componentThree pt2</div>
    </>
  );
}

export default componentThree;
