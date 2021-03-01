export const timeConvert = (n) => {
  const hours = (n / 60)
  const roundedHours = Math.floor(hours)
  const minutes = (hours - roundedHours) * 60
  const roundedMinutes = Math.round(minutes)
  return `${roundedHours}h ${roundedMinutes}m`
}
