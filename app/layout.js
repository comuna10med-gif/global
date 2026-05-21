
export const metadata = {
  title: 'Recovery Agency',
  description: 'Modern multilingual recovery landing page'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"Arial, sans-serif",background:"#0f172a",color:"#fff"}}>
        {children}
      </body>
    </html>
  )
}
