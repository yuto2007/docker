'use client'
export async function nfcRead() {
  if ('NDEFReader' in window) {
    try {
      const ndef = new NDEFReader()
      await ndef.scan()
      console.log('NFC reader is scanning...')

      ndef.onreadingerror = () => {
        console.log('Cannot read data from the NFC tag. Try another one?')
      }

      ndef.onreading = (event: any) => {
        console.log('NFC tag read.')
        const message = event.message
        for (const record of message.records) {
          console.log('Record type:  ' + record.recordType)
          console.log('MIME type:    ' + record.mediaType)
          console.log('=== data ===\n' + record.data)
        }
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  } else {
    console.log('Web NFC is not supported in this browser.')
  }
}
