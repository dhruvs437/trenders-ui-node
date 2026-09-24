import { server_url } from "../information/backend_url";
import { getAuthHeader } from "../information/authHeader";
export const AddToWhilist = async(productId,add)=>{
    try{
        const res = await fetch(`${server_url}/api/addToWhilist`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                ...getAuthHeader()
            },
            body:JSON.stringify({
                productId:productId,add:add
            })
        });
       return res;
    }catch(err){
        console.log(err);
    }
}