import axios from "axios";

import {BASE_URL} from "../utils/api_base_url"

export const contactServ = async (formdata) => {
    try{
     const response = await axios.post(`${BASE_URL}/contact/create` , formdata);
     return response
    }
    catch(err){
     console.log("error in booking table", err);
     throw err
    }
}