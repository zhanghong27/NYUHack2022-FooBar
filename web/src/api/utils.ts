export const tryRetrieve = <T>(key: string, fallback: any): T => {
  const raw = localStorage.getItem(key)
  if (raw === null) return fallback
  return JSON.parse(raw) as T
}

export const save = (key: string, obj: any) => {
  localStorage.setItem(key, JSON.stringify(obj))
}
