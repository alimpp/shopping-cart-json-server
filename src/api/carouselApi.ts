import axios from 'axios'
import { application_base_url } from '@/services/applicationPath'
import { application_path } from '@/services/applicationPath'
import {SuccessNotification} from '@/services/applicationNotification'
import {ErrorNotification} from '@/services/applicationNotification'
import { carouselDataStore } from '@/stores/carouselDataStore'

const carouselDataStoreModule = carouselDataStore()

export const AllCarouselData = async () => {
    await axios.get(`${application_base_url}${application_path.GET.CAROUSEL}`)
    .then((res)=> {
        carouselDataStoreModule.carousel = res.data
    })
    .catch(()=> {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}