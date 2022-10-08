// use local storage to manage cart data
const addToDb = id =>{
    const myCart = getItemFromLS()
    let quantity = 1
    if(myCart[id]){
        myCart[id] = myCart[id] + quantity 
    }
    else{
        myCart[id] = quantity
    }
    localStorage.setItem('cart',JSON.stringify(myCart))
}

const getItemFromLS = ()=>{
    const savedItem = localStorage.getItem('cart')
    let cart = {}
    if(savedItem){
        cart = JSON.parse(savedItem)
    }
    return cart
}
const removeDb = (id)=>{
    const storedProduct = getItemFromLS()
    if(storedProduct[id]){
        delete storedProduct[id]
    }
    localStorage.setItem('cart',JSON.stringify(storedProduct))
    
}
const resetDb = ()=>{
    localStorage.clear()
    
}

export { addToDb, getItemFromLS, removeDb, resetDb }