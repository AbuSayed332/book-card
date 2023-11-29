import React from 'react';
import Nav from './Nav';

export default function Layout({children}) {
    return (
      <>
        <Nav />
        <main class="py-12 px-6 2xl:px-6 container">
          <div class="order-2 xl:-order-1">{children}</div>
        </main>
      </>
    );
}
