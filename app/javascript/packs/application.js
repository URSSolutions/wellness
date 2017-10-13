import {
  monthsFull,
  monthsShort,
  weekdaysFull,
  weekdaysShort
} from './constants'

$(document).ready(() => {
   $('select').material_select()

   $('.modal').modal()

   $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 120,
      closeOnSelect: false,
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Confirmar',
      monthsFull,
      monthsShort,
      weekdaysFull,
      weekdaysShort,
   })
})
