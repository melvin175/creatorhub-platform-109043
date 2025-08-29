'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/src/utils/supabase'
import { handleAuthError } from '@/src/utils/auth'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleAuthCallback = async () => {
      // For @supabase/supabase-js v2, parse tokens from URL and set session:
      const { data, error } = await supabase.auth.getSessionFromUrl({
        storeSession: true,
      })

      if (error) {
        handleAuthError(error, router.push)
        return
      }

      if (data?.session) {
        router.push('/') // dashboard/home
      } else {
        router.push('/auth/error')
      }
    }

    handleAuthCallback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div style={{ padding: 24 }}>Processing authentication...</div>
}
