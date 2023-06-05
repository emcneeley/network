import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { api } from "./AxiosService"

class ProfileService {
    async getProfileById(id) {
        const res = await api.get('/api/profiles/' + id)
        console.log(res.data)
        AppState.profile = new Profile(res.data)

    }

}

export const profileService = new ProfileService()