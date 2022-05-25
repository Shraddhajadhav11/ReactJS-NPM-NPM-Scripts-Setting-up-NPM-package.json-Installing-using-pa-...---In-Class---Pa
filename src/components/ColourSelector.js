import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,label, classname } = config;
  const {key,backgrount,label, classname } = config;
  return (
    <button
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
      onClick={() => selectNextBackground({ background: key })}
    >
      {label}
    </button>
  )
}
export default ColourSelector;
