const envVars = process.env

const config = (env) => {
    const key = `REACT_APP_${env}`

    if (!envVars[key]) throw new Error(`Missing config for ${key} `)

    return envVars[key]
}

export default config
