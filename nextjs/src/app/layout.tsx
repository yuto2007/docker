import Footer from '@/components/layout/footer/page'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
