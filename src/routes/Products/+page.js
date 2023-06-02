export const load = async()=>{
    let res =  await fetch(`https://dummyjson.com/products`);
    console.log(res);
    return {
        title : "product details",
        products : res.json()
    }
}