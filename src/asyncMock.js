
const products = [
    { id: "1", name: "Wedding cake", sex: "Feminizada", category: "indica", stock: 4, price: 7500, pictureUrl: "../imagenes/wedding-cake.png"},
    { id: "2", name: "Gelato", sex: "Regular", category: "sativa", stock: 8, price: 6500, pictureUrl: "../imagenes/Gelato.png"},
    { id: "3", name: "Sour Diesel", sex: "Feminizada", category: "hibrida", stock: 10, price:8000, pictureUrl: "../imagenes/Sour-Diesel.png"},
    { id: "4", name: "OG Kush", sex: "Regular", category: "indica", stock: 10, price: 7000, pictureUrl: "../imagenes/OG-Kush.png"},
    { id: "5", name: "Jack Herer", sex: "Feminizada", category: "sativa", stock: 4, price: 8500, pictureUrl: "../imagenes/Jack-Herer.png"},
    { id: "6", name: "Northern Lights", sex: "Regular", category: "sativa", stock: 8, price: 6000, pictureUrl: "../imagenes/Northern-lights.png"},
    { id: "7", name: "MAC", sex: "Feminizada", category: "indica", stock: 9, price:8000, pictureUrl: "../imagenes/MAC.png"},
    { id: "8", name: "Super Lemon Haze", sex: "Regular", category: "hibrida", stock: 5, price: 7000, pictureUrl: "../imagenes/SLH.png"},
    { id: "9", name: "AK-47", sex: "Feminizada", category: "indica", stock: 4, price: 7000, pictureUrl: "../imagenes/AK-47.png"},
    { id: "10", name: "Bubble Gum", sex: "Regular", category: "sativa", stock: 8, price: 6500, pictureUrl: "../imagenes/BubbleGum.png"},
    { id: "11", name: "Blueberry", sex: "Feminizada", category: "sativa", stock: 10, price:8000, pictureUrl: "../imagenes/Blueberry-Kush.png"},
    { id: "12", name: "Tropicana Cookies", sex: "Feminizada", category: "hibrida", stock: 10, price: 7000, pictureUrl: "../imagenes/TropicanaCookies.png"},
    { id: "13", name: "Ice Cream", sex: "Regular", category: "hibrida", stock: 4, price: 7500, pictureUrl: "../imagenes/Icecream.png"},
    { id: "14", name: "Black Diamond", sex: "Regular", category: "hibrida", stock: 8, price: 8500, pictureUrl: "../imagenes/Blackdiamont.png"},
    { id: "15", name: "Haze", sex: "Feminizada", category: "indica", stock: 6, price:8000, pictureUrl: "../imagenes/Haze.png"},
    { id: "16", name: "White Fire OG", sex: "Feminizada", category: "indica", stock: 10, price: 7500, pictureUrl: "../imagenes/Fire.png"},
    { id: "17", name: "Nerds", sex: "Regular", category: "sativa", stock: 4, price: 7500, pictureUrl: "../imagenes/Nerds.png"},
    { id: "18", name: "Afghani", sex: "Feminizada", category: "sativa", stock: 8, price: 9000, pictureUrl: "../imagenes/Afghani.png"},
    { id: "19", name: "Sour Tangie", sex: "Feminizada", category: "hibrida", stock: 7, price:8000, pictureUrl: "../imagenes/Sour-Tangie.png"},
    { id: "20", name: "Blueberry Kush", sex: "Regular", category: "hibrida", stock: 10, price: 7000, pictureUrl: "../imagenes/Blueberry-Kush.png"},
    ];

export const getProducts = () => { 

    return new Promise( (resolve) => {         
        setTimeout ( () => { 
            resolve( products )   
        })
    } )
};

export const getProductById = (id) => { 

    return new Promise( (resolve) => {         
        setTimeout ( () => { 
            resolve( products.find(prod => prod.id === id) )   
        })
    } )
}
