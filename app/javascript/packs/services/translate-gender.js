const GENDERS = {
  male: 'Masculino',
  female: 'Feminino',
  other: 'Outro'
}

export const translateGender = (gender) => {
  return GENDERS[gender]
}
