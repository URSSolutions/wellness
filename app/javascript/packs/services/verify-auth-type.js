import API from '../services/api'

export const verifyAuthType = () => {
  return API.get('/api/self')
    .then((response) => response.data.class_name === 'User')
    .catch((error) => console.error(error))
}
