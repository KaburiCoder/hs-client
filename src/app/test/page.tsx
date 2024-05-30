'use client';
import React from 'react'

export default function TestPage() {
  return (
    <div>주소: `{process.env.NEXT_PUBLIC_BACKEND_URL}`</div>
  )
}
