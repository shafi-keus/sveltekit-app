import { goto } from "$app/navigation";
import { json } from "@sveltejs/kit";

export const load = async({ params })=>{
    let products = await fetch('https://dummyjson.com/products');
    const res = await products.json();
    let result = null;
    let entries = Object.values(res);
    let data = Object.values(entries[0]);
    data.forEach((p)=>{
        if(p.id == +params.id){
            console.log(p);
            result = p;
        }
    });return result;

}