import React from 'react';

const SchemaRow = ({ schemaObj, rowNum }) => (
  <div className="schemaRow">
    <input value={schemaObj.name}></input>
    <div>
      Object type:
      <select value={schemaObj.type} className="typeSel">
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="boolean">Boolean</option>
      </select>
    </div>
    <input type="checkbox" checked={schemaObj.require}></input>
  </div>
);

export default SchemaRow;
