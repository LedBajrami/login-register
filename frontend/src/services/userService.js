import { apiClient } from "../helpers/apiClient"

export const getUser = async() => {
    try {
        const data = await apiClient('/api/user', {
            method: "GET"
        })

        return data
    } catch (error) {
        console.error(error)
    }
}

export const uploadProfilePhoto = async (file) => {
    const token = localStorage.getItem("access_token");
  
    const formData = new FormData();
    formData.append('profile_photo', file);
  
    try {
      const data = await apiClient('/api/user/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      return data; 
    } catch (error) {
      throw error; 
    }
  };