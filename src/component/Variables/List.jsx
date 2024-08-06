import React, { useEffect, useState } from "react";
import { Dropdown, InputText, InputTextarea, Button } from "primereact";
import Operations from "../Operations";

import { operationsType, sourcesList, colors } from "../dataset";

const List = ({ onChange, id, varNames }) => {
  const variableList = [];
  const [name, setName] = useState("title");
  const [sources, setSources] = useState(null);
  const [dataType, setDataType] = useState(null);
  const [value, setValue] = useState(null);
  const [variables, setVariables] = useState(null);
  const [functions, setFunctions] = useState(null);
  const [operations, setOperations] = useState([]);
  const [params, setParams] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  useEffect(() => {
    onChange({
      id,
      name,
      sources,
      dataType,
      operations,
      value,
      variables,
      functions,
    });
  }, [name, sources, dataType, value, variables, functions, operations]);

  const handleOperationChange = (value) => {
    debugger;
    setOperations([value, ...operations]);
  };

  return (
    <div className="variable__container" style={{ borderColor: colors[id] }}>
      <div className="Hero__container-row">
        <label>Name:</label>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="Hero__container-row">
        <label>Source:</label>
        <Dropdown
          value={sources}
          onChange={(e) => setSources(e.value)}
          options={sourcesList}
          optionLabel="name"
          placeholder="Select a Source"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="Hero__container-row">
        <label>Operation Type:</label>
        <Dropdown
          value={dataType}
          onChange={(e) => setDataType(e.value)}
          options={operationsType}
          optionLabel="name"
          placeholder="Select a Type"
          className="w-full md:w-14rem"
        />
      </div>
      <div className="Hero__container-row">
        <label>Value:</label>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      {id != 1 && (
        <>
          <div className="Hero__container-row">
            <label>Variables:</label>
            <Dropdown
              value={variables}
              onChange={(e) => setVariables(e.value)}
              options={varNames}
              optionLabel="name"
              placeholder="Select a parameter"
              className="w-full md:w-14rem"
            />
          </div>
          <div className="Hero__container-row">
            <label>Select parameters:</label>
            <Dropdown
              value={params[1]}
              onChange={(e) =>
                setParams({ ...params, ...{ 1: e.target.value } })
              }
              options={varNames}
              optionLabel="name"
              placeholder="Select a parameter 1"
              className="w-full md:w-14rem"
            />
            <br />
            <Dropdown
              value={params[2]}
              onChange={(e) =>
                setParams({ ...params, ...{ 2: e.target.value } })
              }
              options={varNames}
              optionLabel="name"
              placeholder="Select a parameter 2"
              className="w-full md:w-14rem"
            />
            <br />
            <Dropdown
              value={params[3]}
              onChange={(e) =>
                setParams({ ...params, ...{ 3: e.target.value } })
              }
              options={varNames}
              optionLabel="name"
              placeholder="Select a parameter 3"
              className="w-full md:w-14rem"
            />
            <br />
            <Dropdown
              value={params[4]}
              onChange={(e) =>
                setParams({ ...params, ...{ 4: e.target.value } })
              }
              options={varNames}
              optionLabel="name"
              placeholder="Select a parameter 4"
              className="w-full md:w-14rem"
            />
            <br />
            <Dropdown
              value={params[5]}
              onChange={(e) =>
                setParams({ ...params, ...{ 5: e.target.value } })
              }
              options={varNames}
              optionLabel="name"
              placeholder="Select a  parameter 5"
              className="w-full md:w-14rem"
            />
          </div>
        </>
      )}
      <div className="Hero__container-row">
        <label>Function:</label>
        <InputTextarea
          value={functions}
          onChange={(e) => setFunctions(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
      <Operations id={id} onChange={handleOperationChange} />
    </div>
  );
};

export default List;
