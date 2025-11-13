'use client'
import { useEffect } from 'react'
import SetKey from '@/lib/crypto/SetKey'
export default function UseStateKey(): null {
  useEffect(() => {
    const fetchKey = async () => {
      await SetKey()
    }
    fetchKey()
  }, [])

  return null
}
