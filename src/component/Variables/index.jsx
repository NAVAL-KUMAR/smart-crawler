import React, { useState } from "react";
import { Button } from "primereact";

import List from "./List";
import "./styles.css";
import { colors } from "../dataset";

const Variables = ({ variable, setVariables }) => {
  const [counts, setCounts] = useState(1);
  const [activeVar, setVar] = useState({});

  const [varNames, setVarNames] = useState([]);

  const handleListChange = (value) => {
    setVar(value);
  };

  const addVariable = () => {
    if (variable.find((e) => e.id === activeVar.id)) {
      const removedActiveVarList = variable.filter(
        (e) => e.id !== activeVar.id
      );
      setVariables([activeVar, ...removedActiveVarList]);
    } else {
      setVariables([activeVar, ...variable]);
    }
    setVarNames([...varNames, { name: activeVar.name, id: activeVar.id }]);
    setCounts(counts + 1);
  };

  const printJson = () => {
    const link = document.createElement("a");
    link.href = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(variable)
    )}`;
    link.download = "Variable.json";
    link.click();
  };

  return (
    <>
      <div className="Body__container">
        {Array.from({ length: counts }).map((count, index) => (
          <List
            onChange={handleListChange}
            varNames={varNames}
            key={`variable - ${count}`}
            id={index + 1}
          />
        ))}
        <Button
          label="Add Variable"
          abel="Success"
          severity="success"
          onClick={addVariable}
        />
        <br />
        <br />
        <hr />
        <button onClick={printJson} download="filename.json">
          Download Json
        </button>
      </div>
    </>
  );
};

export default Variables;
