import React, { useState, useEffect } from "react";
import { Dropdown, InputText, Button } from "primereact";
import { dataTypeList } from "../dataset";

const Arguments = ({ onChange, id }) => {
  const [argumentDataType, setArgumentDataType] = useState(null);
  const [argumentValue, setArgumentValue] = useState(null);
  const [isSubmitted, setSubmited] = useState(false);

  const handleSubmit = () => {
    if (argumentValue && argumentDataType) {
      setSubmited(true);
      onChange({ id, argumentDataType, argumentValue });
    }
  };

  return (
    <div className="Argument__container">
      <Dropdown
        value={argumentDataType}
        onChange={(e) => setArgumentDataType(e.value)}
        options={dataTypeList}
        optionLabel="name"
        placeholder="Select argument data-type"
        className="w-full md:w-14rem"
        disabled={isSubmitted}
      />
      <InputText
        disabled={isSubmitted}
        value={argumentValue}
        onChange={(e) => setArgumentValue(e.target.value)}
      />
      <Button
        disabled={isSubmitted}
        label="Submit Argument"
        severity="info"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Arguments;
