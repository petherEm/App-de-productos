class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    } //que parametros van conformar con producto, muy importante la estructura
    // de clase Producto
}

class UI {
    //para agregar algo dentro de clase Product
    addProduct(product) {

        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
            productList.appendChild(element);
            this.resetForm();
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        //como eliminar el producto ? que podemos hacernos para eliminarlo
        if(element.name === 'delete' ) {
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully', 'danger');
        }

    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //mostrando el DOM // showing DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }

}
//eventos del DOM
 document.getElementById('product-form')
    .addEventListener('submit', function(e) {

        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year); // ahora quiero verlo por pantalla
        //entonces vamos a ver nuestra clase de UI

        const ui = new UI();
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Product Added Successfully', 'success');

 });

 document.getElementById('product-list').addEventListener('click', function(e){
       const ui = new UI();
       ui.deleteProduct(e.target);

 });