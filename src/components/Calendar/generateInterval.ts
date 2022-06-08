import { addDays, eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from '../../utils/getPlatformUtils';

import theme from '../../screens/styles/theme';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({ start: addDays(new Date(start.timestamp), 1), end: addDays(new Date(end.timestamp), 1) })
  .forEach(( item ) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
        ? theme.colors.main : theme.colors.main_light,

        textColor: start.dateString === date || end.dateString === date
        ? theme.colors.main_light : theme.colors.main,
      }
    }
  });

  return interval;
}
