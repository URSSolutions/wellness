const monthsFull = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Augusto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const monthsShort = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Aug',
  'Set',
  'Out',
  'Nov',
  'Dez'
]

const weekdaysFull = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

const weekdaysShort = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sáb'
]

$(document).ready(() => {
   $('select').material_select()

   $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 120, // Creates a dropdown of 15 years to control year,
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      monthsFull,
      monthsShort,
      weekdaysFull,
      weekdaysShort,
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Confirmar',
      closeOnSelect: false // Close upon selecting a date,
   })
})
