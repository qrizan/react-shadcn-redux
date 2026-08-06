declare global {
  interface Window {
    __APP_CONFIG__?: {
      apiUrl?: string
    }
  }
}

export const apiUrl: string = window.__APP_CONFIG__?.apiUrl || import.meta.env.VITE_API_URL
