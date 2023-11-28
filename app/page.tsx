import React, {memo} from "react";

const Page = memo(({...props}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingTop: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            color: "rgb(145, 109, 213)",
          }}
        >
          Success Run OpenAI Proxy！！！
        </h2>
        <div style={{marginTop: "20px"}}>
          
        </div>
        <h4
          style={{
            marginTop: "40px",
            minWidth: "100px",
            color: "rgb(145, 109, 213)",
          }}
        >
          
        </h4>
        <div style={{marginTop: "20px"}}>
          
        </div>
      </div>
    </div>
  );
});

export default Page;
