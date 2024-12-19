import React from 'react';
import './styles/globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lusby - A central location for all AI study needs" />
        <title>Lusby</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <main>
          {children} {/* This is where the individual page components will render */}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
