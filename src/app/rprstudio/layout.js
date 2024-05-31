import React from 'react';

export const metadata = {
  title: 'Passion Palace',
  description: 'Passion palace admin page',
}

export default function Layout({ children }) {
  return (
    <body>{children}</body>

  )
}