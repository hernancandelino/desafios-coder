class ProductManager {
    static products;
    constructor(title, description, price, thumbnail, code, stock) {
        this.products = []
        title = this.title;
        description = this.description;
        price = this.price;
        thumbnail = this.thumbnail;
        code = this.code;
        stock = this.stock;
    }
    addProduct (code, producto) {
        if (ProductManager.products.find((el) => el.code === code) == undefined || producto.title != undefined || producto.description != undefined || producto.price != undefined || producto.thumbnail != undefined || producto.code != undefined || producto.stock != undefined) {
            producto.code++
            ProductManager.products.push(producto)
            console.log(ProductManager.products)
        } else {
            console.log("Producto no agregado al array")
        }
    }
    getProducts () {
        return (console.log(ProductManager.products))
    }
    getProductById (codigoBuscado) {
        const findCode = products.find((el) => el.code === codigoBuscado)
        if (findCode === true) {
            console.log(findCode)
        } else {
            console.log("Not found")
        }
    }
}
const producto1 = new ProductManager("producto", "descripcion", 10, "./", 0, 100);
const producto2 = new ProductManager("producto2", "descripcion2", 15, "./", 1, 200);
producto1.addProduct(producto1.code, producto1)
producto2.addProduct(producto2.code, producto2)
getProductById(producto1.code)
getProducts();