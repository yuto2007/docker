'use client'
import { generatePublicKeyParams } from './keyParams'
import { loadPublicKey, storePublicKey } from './localStorage'

export async function setPublicKey(): Promise<CryptoKeyPair | null> {
  const keyPair = (await loadPublicKey()) ?? (await generatePublicKey())
  if (!(await storePublicKey(keyPair))) return null
  return keyPair ?? null
}
export default async function generatePublicKey(): Promise<CryptoKeyPair | null> {
  try {
    const keyPair = await crypto.subtle.generateKey(
      generatePublicKeyParams,
      true,
      ['encrypt', 'decrypt']
    )
    return keyPair
  } catch (error) {
    console.error('Error generating keys:', error)
    return null
  }
}
