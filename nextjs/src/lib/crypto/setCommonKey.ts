'use client'
import { generateCommonKeyParams } from './keyParams'

interface Commonkey {
  keyData: CryptoKey
  params: AesGcmParams
}
export async function setCommonKey(): Promise<Commonkey | null> {
  try {
    const commonkey = await crypto.subtle.generateKey(
      generateCommonKeyParams,
      true,
      ['encrypt', 'decrypt']
    )
    const iv = crypto.getRandomValues(new Uint8Array(12))
    return {
      keyData: commonkey,
      params: {
        name: 'AES-GCM',
        iv: iv
      }
    }
  } catch (error) {
    console.error('Error generating common key:', error)
    return null
  }
}
