import { supabase } from './supabase'
import { getURL } from './getURL'

export const handleAuthError = (error: any, routerPush?: (path: string) => void) => {
  // eslint-disable-next-line no-console
  console.error('Authentication error:', error)
  const msg = (error?.message ?? '').toLowerCase()

  if (msg.includes('redirect')) {
    routerPush?.('/auth/error?type=redirect')
  } else if (msg.includes('email')) {
    routerPush?.('/auth/error?type=email')
  } else {
    routerPush?.('/auth/error')
  }
}

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${getURL()}auth/callback`,
    },
  })
  return { data, error }
}

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getURL()}auth/reset-password`,
  })
  return { data, error }
}

export const signInWithMagicLink = async (email: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${getURL()}auth/callback`,
    },
  })
  return { data, error }
}

export const signInWithOAuth = async (provider: 'github' | 'google' | 'discord' | 'twitter') => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${getURL()}auth/callback`,
    },
  })
  return { data, error }
}
