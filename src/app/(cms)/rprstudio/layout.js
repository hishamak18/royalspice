export const metadata = {
  title: 'Passion Palace',
  description: 'Passion palace admin page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}