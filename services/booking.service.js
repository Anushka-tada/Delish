import axios from "axios";

import {BASE_URL} from "../utils/api_base_url"

export const bookTableServ = async (formdata) => {
    try{
     const response = await axios.post(`${BASE_URL}/booking/create` , formdata ,  {
    withCredentials: true  
  });
     return response
    }
    catch(err){
     console.log("error in booking table", err);
     throw err
    }
}

export const getBookingServ = async (id) => {
    try{
     const response = await axios.get(`${BASE_URL}/booking/my-bookings` ,   {
    withCredentials: true  
  });
     return response
    }
    catch(err){
     console.log("error in bookings", err);
     throw err
    }
}

export const getBookingByIdServ = async (id) => {
    try{
     const response = await axios.get(`${BASE_URL}/booking/${id}` ,   {
    withCredentials: true  
  });
     return response
    }
    catch(err){
     console.log("error in bookings", err);
     throw err
    }
}