import { getItemFromLS } from "../../utilities/fakedb"

export const productLoder = async()=>{
    const productLoder = await(fetch('products.json'))
    const products = await(productLoder.json())

    // get data from local
    
    const savedCart = getItemFromLS()
    const initialCart = []
   
    for(const id in savedCart){
        const addProductDb = products.find(product=>product.id === id )
        if(addProductDb){
            const newQuantity = savedCart[id]
            addProductDb.quantity = newQuantity

        }
        initialCart.push(addProductDb)
    }
    


    return {products,initialCart}
}