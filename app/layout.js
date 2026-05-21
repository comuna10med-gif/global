
import "../styles/globals.css"

export const metadata = {
  title: "Recovery Shield",
  description: "Professional financial recovery services"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
