import React, { useState, useEffect } from "react";
import {
  Dropdown,
  InputText,
  MultiSelect,
  InputTextarea,
  Button,
} from "primereact";

import Arguments from "./Arguments";
import { returnType } from "../dataset";
import "./styles.css";

const Function = ({ id, onChange }) => {
  const [name, setName] = useState(null);
  const [returnTypeVal, setReturnTypeVal] = useState(null);
  const [logic, setLogic] = useState(null);
  const [argCount, setArgCount] = useState(1);
  const [argLists, setArgList] = useState([]);

  useEffect(() => {
    onChange({ id, name, argLists, returnTypeVal, logic });
  }, [name, returnTypeVal, argLists, logic]);

  const handleArgChange = (value) => {
    debugger;
    if (argLists.find((arg) => arg.id === value.id)) {
      const removeExistingItem = argLists.filter((arg) => arg.id !== id);
      setArgList([...removeExistingItem, value]);
    } else {
      setArgList([...argLists, value]);
    }
  };

  return (
    <div className="Function__container">
      <div className="Hero__container-row">
        <label>Name:</label>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="Hero__container-row">
        <label>Return type:</label>
        <Dropdown
          value={returnTypeVal}
          onChange={(e) => setReturnTypeVal(e.value)}
          options={returnType}
          optionLabel="name"
          placeholder="Select a return type"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="Arguments">
        {Array.from({ length: argCount }).map((count, index) => (
          <Arguments id={index} onChange={handleArgChange} />
        ))}
        <br />
        <Button
          label="Add Argument"
          severity="info"
          onClick={() => setArgCount(argCount + 1)}
        />
      </div>
      <div className="Hero__container-row">
        <label>Logic:</label>
        <InputTextarea
          value={logic}
          onChange={(e) => setLogic(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
    </div>
  );
};

export default Function;
