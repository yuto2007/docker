'use client'
import { QRCode } from 'react-qrcode-logo'
export default async function GenerateQr() {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <QRCode value='https://example.com' />
    </div>
  )
}
