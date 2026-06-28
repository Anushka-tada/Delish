import axios from "axios";

import {BASE_URL} from "../utils/api_base_url"

export const userRegisterServ = async (formdata) => {
    try{
     const response = await axios.post(`${BASE_URL}/auth/register` , formdata ,{
  withCredentials: true
});
     return response
    }
    catch(err){
     console.log("Error in user register", err);
     throw err
    }
}

export const userLoginServ = async (formdata) => {
    try{
     const response = await axios.post(`${BASE_URL}/auth/login` , formdata ,  {
  withCredentials: true
});
     return response
    }
    catch(err){
     console.log("Error in user register", err);
     throw err
    }
}