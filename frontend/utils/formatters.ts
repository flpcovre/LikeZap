/**
 * Convert a duration in seconds into H:i:s format.
 * Only show hours if the duration is longer than an hour.
 */
export const secodsToHis = (total: number) => {
    total = Math.round(total)
    const parts: string[] = []
  
    const hours = Math.floor(total / 3600)
  
    if (hours > 0) {
      parts.push(hours.toString().padStart(2, '0'))
    }
  
    parts.push((Math.floor((total / 60) % 60)).toString().padStart(2, '0'))
    parts.push((total % 60).toString().padStart(2, '0'))
  
    return parts.join(':')
}