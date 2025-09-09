
result = {
  "products": [
    { "id": 1, "name": "Laptop", "category": "Electronics", "price": 1000 },
    { "id": 2, "name": "Book", "category": "Education", "price": 20 },
    { "id": 3, "name": "Phone", "category": "Electronics", "price": 500 },
    { "id": 4, "name": "Pen", "category": "Office", "price": 2 }
  ]
};

// Нужно преобразовать в:
/**
* {
* "Electronics": [
*   { "productName": "Laptop", "price": 1000 },
*    { "productName": "Phone", "price": 500 }
*  ],
*  "Education": [
*    { "productName": "Book", "price": 20 }
*  ],
*  "Office": [
*    { "productName": "Pen", "price": 2 }
*  ]
* }
**/

function groupByCategory(data) {

    let grouped = {};

    for (let i = 0; i < data.products.length; i++) {
        let product = data.products[i];
        let category = product.category; 

        if (!grouped[category]) {
            grouped[category] = [];
        } // если категории нет создаем массив

        grouped[category].push({
            productName: product.name,
            price: product.price
        }); // добавляем объект в массив категории
        
    }

    return grouped;

}

console.log(groupByCategory(result));
