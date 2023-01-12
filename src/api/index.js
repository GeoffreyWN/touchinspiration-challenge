import config from '../helpers/config'

export const requestDefaults = {
    baseURL: config('BASE_URL'),
    headers: {
        'Content-Type': 'application/json',
        'x-apiKey': '63be7360969f06502871ad7f'
    }
}


