import React from 'react';

const SchemaDisplay = ({ kvpArr }) => {
  let schemaArr = [`const name = new Schema ({ `];
  for (const ele of kvpArr) {
    const tempLine = `    ${ele.name}: {type:${ele.type}, require:${
      ele.require ? 'true' : 'false'
    }},`;
    schemaArr.push(tempLine);
  }
  schemaArr.push('});');
  const schemaStr = schemaArr.join('\n');
  return (
    <pre>
      <code>{schemaStr}</code>
    </pre>
  );
};

export default SchemaDisplay;
