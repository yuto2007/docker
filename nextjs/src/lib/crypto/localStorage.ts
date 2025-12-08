'use client'
import { importPublicKeyParams } from './keyParams'

interface Jsonkey {
  keyData: JsonWebKey
  algorithm: Algorithm
  extensible: boolean
  keyUsages: KeyUsage[]
}
export async function storePublicKey(
  keypair: CryptoKeyPair | null
): Promise<boolean> {
  if (keypair === null) return false
  try {
    localStorage.setItem(
      'privateKey',
      JSON.stringify({
        keyData: await crypto.subtle.exportKey('jwk', keypair.privateKey),
        algorithm: importPublicKeyParams,
        extensible: true,
        keyUsages: ['decrypt']
      })
    )
    localStorage.setItem(
      'publicKey',
      JSON.stringify({
        keyData: await crypto.subtle.exportKey('jwk', keypair.publicKey),
        algorithm: importPublicKeyParams,
        extensible: true,
        keyUsages: ['encrypt']
      })
    )
  } catch (error) {
    console.error('Error storing keys:', error)
    return false
  }
  return true
}
export function eportPublicKey() {
  const [privateKey, publicKey] = [
    localStorage.getItem('privateKey'),
    localStorage.getItem('publicKey')
  ]
  return [privateKey, publicKey]
}

export async function loadPublicKey(): Promise<CryptoKeyPair | null> {
  const [rawPrivateKey, rawPublicKey] = eportPublicKey()
  if (rawPrivateKey === null || rawPublicKey === null) return null
  try {
    const [privateKey, publicKey]: [Jsonkey, Jsonkey] = [
      JSON.parse(rawPrivateKey),
      JSON.parse(rawPublicKey)
    ]
    return {
      privateKey: await crypto.subtle.importKey(
        'jwk',
        privateKey.keyData,
        importPublicKeyParams,
        privateKey.extensible,
        privateKey.keyUsages
      ),
      publicKey: await crypto.subtle.importKey(
        'jwk',
        publicKey.keyData,
        importPublicKeyParams,
        publicKey.extensible,
        publicKey.keyUsages
      )
    }
  } catch (error) {
    console.error('Error parsing keys from localStorage:', error)
    return null
  }
}
