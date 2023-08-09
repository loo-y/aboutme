import dayjs from 'dayjs'
import 'dayjs/locale/en'

export const isValidDate = (dateText: string | number | undefined) => {
    if (!dateText) return false
    if (!dayjs(dateText).isValid()) return false
    return true
}
export const formatEnDateMY = (dateText: string | number | undefined) => {
    if (!isValidDate(dateText)) return dateText

    return dayjs(dateText).locale('en').format('MMM YYYY')
}
