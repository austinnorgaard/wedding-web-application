'use client';

import { useState, useEffect } from "react";

export function useLocalStorage (name: string) {
  const [value, setValue]: any = useState('')

  useEffect(() => {
    setValue(localStorage.getItem(name))
  }, [])

  return value
}

export function setLocalStorage (name: string, key: string) {
    const [value, setValue]: any = useState('')
  
    useEffect(() => {
      setValue(localStorage.setItem(name, key))
    }, [])
  
    return value
  }