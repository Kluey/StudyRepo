import './styles/globals.css';

export const metadata = {
  title: 'Lusby Website',
  description: 'A central location for all ai study needs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
