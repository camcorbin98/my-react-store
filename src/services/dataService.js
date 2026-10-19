
const catalog = [
    {
        "title": "Chocolate",
        "category": "candy",
        "price": 15,
        "image": "choco.png",
        "_id": "1"
    },
    {
        "title": "Hoodie",
        "category": "merchandise",
        "price": 15,
        "image": "hoodie.png",
        "_id": "2"
    },
    {
        "title": "Milk",
        "category": "dairy",
        "price": 15,
        "image": "milk.png",
        "_id": "3"
    },

]

class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;
