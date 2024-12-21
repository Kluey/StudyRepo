'use client'
import './styles/globals.css';
import { Provider } from 'react-redux';
import { store } from './services/store.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="StudyRepo - A central location for all AI study needs" />
        <title>StudyRepo</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Provider store={store}>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
