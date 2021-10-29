export const convertMinsToHrsMins = (mins: number) => {
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? 0 + h : h
  m = m < 10 ? 0 + m : m

  if (h > 0) return `${h} uur en ${m} minuten`
  return `${m} minuten`
}
