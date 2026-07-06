/** Base URL for public assets (GitHub Pages compatible). */
export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const WHATSAPP_URL = '#'

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Amici+Nails+dal+2010/@45.4566769,9.2067546,18z/data=!4m10!1m2!2m1!1snails+salon!3m6!1s0x4786c69e28c5d321:0xa1f0895c88252ca0!8m2!3d45.4566769!4d9.2082006!15sCgtuYWlscyBzYWxvbloNIgtuYWlscyBzYWxvbpIBCm5haWxfc2Fsb26aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFhWE5RTWtGbkVBReABAPoBBAgfEEk!16s%2Fg%2F11c5zptt0c?entry=ttu'

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Amici+Nails+dal+2010/@45.4569599,9.2068608,18.72z/data=!3m1!5s0x4786c69e2812f1cd:0xd34bc72f918dbf1c!4m12!1m2!2m1!1snails+salon!3m8!1s0x4786c69e28c5d321:0xa1f0895c88252ca0!8m2!3d45.4566769!4d9.2082006!9m1!1b1!15sCgtuYWlscyBzYWxvbloNIgtuYWlscyBzYWxvbpIBCm5haWxfc2Fsb26aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFhWE5RTWtGbkVBReABAPoBBAgfEEk!16s%2Fg%2F11c5zptt0c?entry=ttu'

export const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
