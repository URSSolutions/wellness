import * as moment from 'moment/min/moment-with-locales.min.js';

moment.locale('pt-BR')

export const formatDate = (date) => {
  return moment(date).format('L LT')
}
