import React from 'react';

const SchemaRow = ({ schemaObj, rowNum, updateKvpSchema }) => (
  <div className="schemaRow">
    <input
      value={schemaObj.name}
      onChange={(e) => updateKvpSchema(rowNum, { name: e.target.value })}
    ></input>
    <div>
      Object type:
      <select
        value={schemaObj.type}
        className="typeSel"
        onChange={(e) => updateKvpSchema(rowNum, { type: e.target.value })}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="boolean">Boolean</option>
      </select>
    </div>
    <input
      type="checkbox"
      checked={schemaObj.require}
      onChange={(e) => updateKvpSchema(rowNum, { require: e.target.checked })}
    ></input>
  </div>
);

export default SchemaRow;
