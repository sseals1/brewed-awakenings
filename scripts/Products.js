import { getProducts } from "./database.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product--")) {
            const [,productId] = itemClicked.id.split("--")
        
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} is $${product.price}`)
                }
            }
        }
    } 
)






const products = getProducts()

export const Products = () => {
    let productsHtml = "<ul>"

    for (const product of products) {
        productsHtml += `<li id="product--${product.id}">${product.name}</li>`
    }

    productsHtml += "</ul>"

    return productsHtml
}

