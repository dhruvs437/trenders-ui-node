import { server_url } from "../information/backend_url";
import { getAuthHeader } from "../information/authHeader";
export const AddToCart = async(productId,add,qty,type)=>{
    try{
        const res = await fetch(`${server_url}/api/addToCart`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                ...getAuthHeader()
            },
            body:JSON.stringify({
                productId:productId,add:add,qty:qty,type:type
            })
        });
       return res
    }catch(err){
        console.log(err);
    }
}