import React, { useState, useEffect } from "react";
import { Dropdown, InputText, Button } from "primereact";
import { operationsType, sourcesList } from "../dataset";

import "./styles.css";

const OperationComp = ({ onChange, id }) => {
  const [value, setValue] = useState(null);
  const [opertaionType, setOpertaionType] = useState(null);

  useEffect(() => {
    onChange({ id, value, opertaionType });
  }, [value, opertaionType]);
  return (
    <>
      <div className="Hero__container-row">
        <label>Operation Type:</label>
        <Dropdown
          value={opertaionType}
          onChange={(e) => setOpertaionType(e.value)}
          options={operationsType}
          optionLabel="name"
          placeholder="Select a Type"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="Hero__container-row">
        <label>Operation Value:</label>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </>
  );
};

const Operations = ({ id, onChange }) => {
  const [error, setError] = useState(null);
  const [counts, setCounts] = useState(1);
  const [activeOp, setActiveOp] = useState(null);

  const handleOpChange = (value) => {
    setActiveOp(value);
  };
  const onSubmit = () => {
    if (activeOp) {
      if (error) setError(null);
      onChange({
        opertaionType: activeOp.opertaionType,
        OpId: activeOp.id,
        value: activeOp.value,
      });
      setCounts(counts + 1);
    } else {
      setError("Naval says, fill all values");
    }
  };
  return (
    <>
      <h3>Operations :</h3>
      <div className="Operations__container">
        {Array.from({ length: counts }).map((count, index) => (
          <OperationComp id={index} onChange={handleOpChange} />
        ))}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button
          label="Submit current"
          abel="Success"
          severity="success"
          onClick={onSubmit}
        />
      </div>
    </>
  );
};

export default Operations;
