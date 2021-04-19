import axios from 'axios'
//const baseUrl = 'https://www.balldontlie.io/api/v1/players'
const baseUrl = '/api/contact'

const sendMessage = async (email, message) => {
  await axios.post(baseUrl, {
    email: email,
    message: message
  })
}

const contactService = { sendMessage }

export default contactService