/** Reemplazar por la URL de deploy cuando Halo Brief esté en producción */
export const HALO_BRIEF_URL = '#'

export function isHaloBriefLive(url = HALO_BRIEF_URL) {
  return Boolean(url && url !== '#')
}
