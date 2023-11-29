import React from 'react';

export default function Form({children, ...rest}) {
  return (
    <form className="book - form" {...rest}>
      {children}
    </form>
  );
}
