import React from 'react'
import "./globals.css"

function RootLayout({ children }) {
  

  return (
    <html>
        <head />
        <body className="flex justify-center items-center py-4">
            {children}
        </body>
    </html>
  )
}

export default RootLayout