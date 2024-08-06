import React, { useState } from "react";
import Function from "./Function";
import { Button } from "primereact";

const Functions = () => {
  const [counts, setCounts] = useState(1);
  const [activeFun, setActiveFun] = useState(null);
  const [functions, setFunctions] = useState([]);

  const handleFunctionChange = (value) => {
    setActiveFun(value);
  };

  const addFunction = (value) => {
    if (functions.find((e) => e.id === activeFun.id)) {
      const removedActiveFunList = functions.filter(
        (e) => e.id !== setActiveFun.id
      );
      setFunctions([activeFun, ...removedActiveFunList]);
    } else {
      setFunctions([activeFun, ...functions]);
    }
    setCounts(counts + 1);
  };

  const printJson = () => {
    const link = document.createElement("a");
    link.href = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(functions)
    )}`;
    link.download = "Functions.json";
    link.click();
  };

  return (
    <>
      {Array.from({ length: counts }).map((count, index) => (
        <Function id={index} onChange={handleFunctionChange} />
      ))}
      <Button
        label="Add Function"
        abel="Success"
        severity="success"
        onClick={addFunction}
      />
      <br />
      <br />
      <hr />
      <button onClick={printJson} download="filename.json">
        Download function Json
      </button>
    </>
  );
};
export default Functions;
