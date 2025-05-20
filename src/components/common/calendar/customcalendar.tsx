import styles from "./customcalendar.module.scss"
import {DayPicker, isDateInRange} from "react-day-picker";
import { ko } from 'date-fns/locale'
import {addDays, endOfWeek, startOfWeek} from "date-fns";

const CustomCalendar = ({selectedWeek, setSelectedWeek}) => {

  return (
    <div className={styles.calendar}>
      <DayPicker
        locale={ko}
        mode="single"
        showOutsideDays
        modifiers={{
          selected: selectedWeek,
          range_start: selectedWeek?.from,
          range_end: selectedWeek?.to,
          range_middle: (date: Date) =>
            selectedWeek
              ? isDateInRange(date, selectedWeek, { excludeEnds: true })
              : false
        }}
        onDayClick={(day, modifiers) => {
          if (modifiers.selected) {
            setSelectedWeek(undefined); // Clear the selection if the day is already selected
            return;
          }
          setSelectedWeek({
            from: startOfWeek(day),
            to: endOfWeek(day)
          });
        }}
      />
    </div>
  )
}
export default CustomCalendar