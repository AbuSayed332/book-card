import React from 'react';

export default function TextInput({ text, className, ...rest }) {
  return (
    <div className={className}>
      <label for="lws-bookName"> {text} </label>
      <input required className="text-input" {...rest} />
    </div>
  );
}
