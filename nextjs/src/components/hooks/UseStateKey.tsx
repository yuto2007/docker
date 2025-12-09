'use client'
import { useEffect } from 'react'
import { setPublicKey } from '@/lib/crypto/publicKey'
import { setCommonKey } from '@/lib/crypto/setCommonKey'
import { nfcRead } from '@/lib/webnfc/nfcRead'

export default function useStateKey(): null {
  useEffect(() => {
    const fetchKey = async () => {
      await nfcRead()
      await setPublicKey()
      const commonKey = await setCommonKey()
      const data = new TextEncoder().encode('aaaa')
      if (commonKey === null) return null
      const encryptedData = await crypto.subtle.encrypt(
        commonKey.params,
        commonKey.keyData,
        data
      )
      console.log('Encrypted data:', new Uint8Array(encryptedData))
      console.log(
        new TextDecoder().decode(
          await crypto.subtle.decrypt(
            commonKey.params,
            commonKey.keyData,
            encryptedData
          )
        )
      )
      console.log(
        await crypto.subtle.decrypt(
          commonKey.params,
          commonKey.keyData,
          encryptedData
        )
      )
    }
    fetchKey()
  }, [])

  return null
}
