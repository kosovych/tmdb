export const convertMinutesToHours = (minutes) => {
  const hours = minutes / 60
  const roundedHours = Math.floor(hours)
  const restMinutes = (hours - roundedHours) * 60
  const roundedMinutes = Math.round(restMinutes)
  return `${roundedHours}h ${roundedMinutes}m`
}
