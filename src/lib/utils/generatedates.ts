import dayjs from "dayjs"

const generateDates = (centerDate: dayjs.Dayjs, range = 30) => {
  const dates = []
  for (let i = -range; i <= range; i++) {
    const d = centerDate.add(i, "day")
    dates.push({
      key: d.format("YYYY-MM-DD"),
      label: d.format("dd"), // 요일
      date: d.date(),
      fullDate: d,
      isToday: d.isSame(dayjs(), "day"),
    })
  }
  return dates
}

export default generateDates
