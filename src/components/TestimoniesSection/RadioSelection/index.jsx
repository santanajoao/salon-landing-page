import React from 'react';

export default function RadioSelection({
  id,
  label,
  onChange,
  className,
  checked,
  name,
}) {
  return (
    <label htmlFor={id}>
      <span className="screen-readers-only">{label}</span>
      <input
        name={name}
        type="radio"
        onChange={onChange}
        id={id}
        className={className}
        checked={checked}
      />
    </label>
  );
}
