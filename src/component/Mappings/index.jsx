import React, { useState } from "react";
import { Dropdown } from "primereact";

import { mappingList } from "../dataset";

const Mappings = ({variable, mappings, setMappings}) => {
  const onSelectMapping = (key, selectedValue) => {
    const existingValue = mappings.find(map => map.name == key);
    if(existingValue){
      setMappings([...mappings.filter(map => map.name != key), { name : key, value : selectedValue}])
    }else{
      setMappings([...mappings, { name : key, value : selectedValue}]);
    }
  }

  const getValue = (key) => {
    const existValue = mappings.find(map => map.name == key)
    console.log("Value", existValue);
    if(existValue) return existValue.value;
  } 


  return (
    <>
      {mappingList.map(map => <div className="Hero__container-row">
      <label>{map.code}</label>
      <Dropdown
          value={getValue(map.name)}
          onChange={(e) => onSelectMapping(map.name, e.target.value)}
          options={variable.map(v => v.name)}
          optionLabel="name"
          placeholder="Select Value"
          className="w-full md:w-14rem"
        />
    </div>)}
    </>
  );
};
export default Mappings;
