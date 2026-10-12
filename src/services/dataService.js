
const catalog = [
    {
        "title": "Oranges",
        "category": "fruit",
        "price": 15,
        "image": "placeholder",
        "_id": "1"
    },
    {
        "title": "Banana",
        "category": "fruit",
        "price": 15,
        "image": "placeholder",
        "_id": "2"
    },
    {
        "title": "Chocolate",
        "category": "fruit",
        "price": 15,
        "image": "placeholder",
        "_id": "3"
    },
]

class DataService {
    getProduct() {
        return catalog;
    }
}

export default DataService;
