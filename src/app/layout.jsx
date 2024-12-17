import './styles/globals.css';

export const metadata = {
  title: 'Lusby Website',
  description: 'A central location for all AI study needs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
