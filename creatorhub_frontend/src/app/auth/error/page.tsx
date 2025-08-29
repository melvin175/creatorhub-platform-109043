export default function AuthErrorPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Authentication Error</h1>
      <p>There was a problem processing your authentication request.</p>
      <p>Please ensure the redirect URL is allowed in Supabase Authentication settings and try again.</p>
    </div>
  )
}
