const importPublicKeyParams: RsaHashedImportParams = {
  hash: 'SHA-256',
  name: 'RSA-OAEP'
}
const generatePublicKeyParams: RsaHashedKeyGenParams = {
  hash: 'SHA-256',
  name: 'RSA-OAEP',
  modulusLength: 2048,
  publicExponent: new Uint8Array([0x01, 0x00, 0x01])
}
const generateCommonKeyParams: AesKeyGenParams = {
  name: 'AES-GCM',
  length: 256
}
export {
  importPublicKeyParams,
  generatePublicKeyParams,
  generateCommonKeyParams
}
