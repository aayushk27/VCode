const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:2000/api' : 'https://my-vcode-backend.herokuapp.com'

export const api = `${baseUrl}/api`;