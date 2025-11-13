'use client'
interface key {
  keyData: JsonWebKey
  algorithm: Algorithm
  extensible: boolean
  keyUsages: KeyUsage[]
}

export default async function SetKey(): Promise<CryptoKeyPair | null> {
  if (localStorage.getItem('privateKey') && localStorage.getItem('publicKey')) {
    const privateKey = localStorage.getItem('privateKey')
    const publicKey = localStorage.getItem('publicKey')
    try {
      if (privateKey !== null && publicKey !== null) {
        const privateKeyData: key = JSON.parse(privateKey)
        const publicKeyData: key = JSON.parse(publicKey)

        return {
          privateKey: await crypto.subtle.importKey(
            'jwk',
            privateKeyData.keyData,
            privateKeyData.algorithm,
            privateKeyData.extensible,
            privateKeyData.keyUsages
          ),
          publicKey: await crypto.subtle.importKey(
            'jwk',
            publicKeyData.keyData,
            publicKeyData.algorithm,
            publicKeyData.extensible,
            publicKeyData.keyUsages
          )
        }
      }
    } catch (error) {
      console.error('Error importing keys:', error)
      return null
    }
  }

  const algorithm: RsaHashedKeyGenParams = {
    name: 'RSA-OAEP',
    modulusLength: 2048,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: 'SHA-256'
  }
  try {
    const keyPair = await crypto.subtle.generateKey(algorithm, true, [
      'encrypt',
      'decrypt'
    ])
    localStorage.setItem(
      'privateKey',
      JSON.stringify({
        keyData: await crypto.subtle.exportKey('jwk', keyPair.privateKey),
        algorithm: algorithm,
        extensible: true,
        keyUsages: ['encrypt', 'decrypt']
      })
    )
    localStorage.setItem(
      'publicKey',
      JSON.stringify({
        keyData: await crypto.subtle.exportKey('jwk', keyPair.publicKey),
        algorithm: algorithm,
        extensible: true,
        keyUsages: ['encrypt', 'decrypt']
      })
    )
    return keyPair
  } catch (error) {
    console.error('Error generating keys:', error)
    return null
  }
}
