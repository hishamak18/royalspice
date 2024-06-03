export const metadata = {
  title: 'Royal Spice Restaurant',
  description: 'Royal Spice Restaurant Admin Pannel',
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