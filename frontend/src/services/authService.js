import { apiClient } from "../helpers/apiClient"

export const login = async (email, password) => {
    try {
        const data = await apiClient('/api/login', {
            method: "POST",
            body: JSON.stringify({email, password})
        })
        localStorage.setItem("access_token", data.token)
        return data
    } catch (error) {
        throw error
    }
}


export const register = async ({name, email, password, confirmPassword}) => {
    try {
        const data = await apiClient('/api/register', {
            method: "POST",
            body: JSON.stringify({
                name, email, password, password_confirmation: confirmPassword
            })
        })

        return data
    } catch (error) {
        throw error
    }
}


export const logout = async () => {
    localStorage.removeItem("access_token")
}