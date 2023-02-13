import axios from 'axios'
import { application_base_url } from '@/services/applicationPath'
import { application_path } from '@/services/applicationPath'
import {SuccessNotification} from '@/services/applicationNotification'
import {ErrorNotification} from '@/services/applicationNotification'
import {productsDataStore} from '@/stores/productsDataStore'

const productsDataStoreModule = productsDataStore()

export const AllProducts = async () => {
   await axios.get(`${application_base_url}${application_path.GET.PRODUCTS}`)
   .then((res)=> {
        productsDataStoreModule.products = res.data
    })
    .catch(()=> {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const CreateProducts = async (param : any) => {
    await axios.post(`${application_base_url}${application_path.POST.CREATE_PRODUCTS}` , {
        image : param.image ,
        name : param.name , 
        category : param.category , 
        price : param.price , 
        comments : []
    })
    .then(() => {
        SuccessNotification(2000, 'Products Created','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const UpdateProducts = async (param : any , id : number) => {
    await axios.put(`${application_base_url}${application_path.PUT.UPDATE_PRODUCTS}/${id}` , {
        image : param.image ,
        name : param.name , 
        category : param.category , 
        price : param.price ,
    })
    .then(() => {
        SuccessNotification(2000, 'Products Updated','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const DeleteProducts = async (id : number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_PRODUCTS}/${id}`)
    .then(() => {
        SuccessNotification(2000, 'Products Deleted','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}

export const AddComment = async (param : any , id : number) => {
    await axios.put(`${application_base_url}${application_path.PUT.ADD_COMMENT}/${id}` , {
        image : param.image ,
        name : param.name , 
        category : param.category , 
        price : param.price ,
        comments : param.comments
    })
    .then(() => {
        SuccessNotification(2000, 'Products Updated','bottom-center')
    })
    .catch(() => {
        ErrorNotification(3000,'Your network is low please try again and check network','bottom-center')
    })
}