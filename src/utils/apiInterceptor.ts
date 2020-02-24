/**
 * This is a utility function to intercept API calls. 
 * One can add custom headers or API tokens to each call when needed, and
 * it also allows us to handle rrrors and exceptions from a single place
 * 
 * ex. api.get('https://www.mocky.io/v2/5185415ba171ea3a00704eed').then(response => console.log(response)
 * Plus, if the API call belongs to same domain it will add base url automatically
 */
import axios from 'axios'
import qs from 'qs'

const serviceUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://domain.com.au'
  }

  return 'https://staging-api.domain.com.au'
}

interface IResponseProps {
    headers: {
        authorization: any
    }
    status: number
    data: any
}

/**
 * axios instance
 */
const instance = axios.create({
  baseURL: serviceUrl(),
  paramsSerializer: (params: any) => qs.stringify(params, { indices: false }),
})

// Request headers
instance.interceptors.request.use(
  async (config: any) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// Parse the response
instance.interceptors.response.use(
  (response: any) => {
    return parseBody(response)
  },
  (error: any) => {
    if (error.response) {
      // Alternatively, can redirect to error page in case of API Error
      return parseError(error.response.data)
    } else {
      return Promise.reject(error)
    }
  },
)

/**
 * Parse the error response
 */

function parseError (messages: string | string[],) {
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages })
    } else {
      return Promise.reject({ messages: [messages] })
    }
  }
}

/**
 * Function to parse the response from the API
 */
function parseBody (response: IResponseProps) {
  switch (response.status) {
    case 200:
    case 201:
      if (response.headers.authorization) {
        return {
          ...response,
          data: {
            ...response.data,
            authHeaders: response.headers.authorization,
          },
        }
      } else {
        return response.data
      }
    default:
      return parseError(response.data.messages)
  }
}

export const api = instance
