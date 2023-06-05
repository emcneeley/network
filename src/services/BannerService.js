import { AppState } from "../AppState"
import { Banner } from "../models/Banner"
import { api } from "./AxiosService"

class BannerService {

    async getAllBanners() {
        const res = await api.get('/api/ads')
        console.log('these are ads', res.data)
        AppState.banner = res.data.map(b => new Banner(b))
    }

}

export const bannerService = new BannerService()