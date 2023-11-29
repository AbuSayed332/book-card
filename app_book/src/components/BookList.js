import React from 'react';
import Button from './Button';

export default function BookList() {
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <Button className="lws-filter-btn active-filter">All</Button>
        <Button className="lws-filter-btn">Featured</Button>
      </div>
    </div>
  );
}
