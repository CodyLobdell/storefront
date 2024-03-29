let data = { "count": 14, "results": [{ "_id": "620333730913520018fa1d2a", "name": "Stickies", "category": "office", "inStock": 8, "price": 10, "__v": 0 }, { "_id": "636ac522d8f00a001859460d", "name": "Pizza", "category": "food", "inStock": 290, "price": 1.99, "__v": 0 }, { "_id": "636ac528d8f00a001859460f", "name": "Cookies", "category": "food", "inStock": 59, "price": 2.38, "__v": 0 }, { "_id": "636ac534d8f00a0018594611", "name": "Plasma TV", "category": "electronics", "inStock": 5941, "price": 1000, "__v": 0 }, { "_id": "636ac547d8f00a0018594615", "name": "iPad", "category": "electronics", "inStock": 139, "price": 1000, "__v": 0 }, { "_id": "636ac5c7d8f00a0018594617", "name": "Fancy Pants", "category": "clothes", "inStock": 83, "price": 1000, "__v": 0 }, { "_id": "636ac5cdd8f00a0018594619", "name": "Green Jeans", "category": "clothes", "inStock": 89, "price": 1000, "__v": 0 }, { "_id": "636ac5fdd8f00a001859461c", "name": "Monopoly", "category": "games", "inStock": 92, "price": 1000, "__v": 0 }, { "_id": "636ac607d8f00a001859461e", "name": "Smash Bros", "category": "games", "inStock": 41, "price": 1000, "__v": 0 }, { "_id": "636ac617d8f00a0018594620", "name": "Samurai Sword", "category": "weapons", "inStock": 94, "price": 1000, "__v": 0 }, { "_id": "636ac657d8f00a0018594622", "name": "Knife", "category": "weapons", "inStock": 69, "price": 1000, "__v": 0 }, { "_id": "642c496f817e9b00140439ff", "name": "camera", "category": "electronics", "price": 109.99, "inStock": 2159, "__v": 0 }, { "_id": "642c71a8817e9b0014043a13", "name": "TV", "category": "electronics", "price": 1099.99, "inStock": 2177, "__v": 0 }, { "_id": "642c71c7817e9b0014043a15", "name": "Banana", "category": "food", "price": 0.99, "inStock": 2179, "__v": 0 }] };


const initialState = {
  products: data.results,
}



function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CATEGORY':

      return state;
    // }
    case 'ADD_CART':
      return {
        products: state.products.map(product => {
          if (product.name === action.payload) { product.inStock -= 1; }
          return product;
        })
      };
    case 'REMOVE_CART':
      return {
        products: state.products.map(product => {
          if (product.name === action.payload) { product.inStock += 1; }
          return product;
        })
      };

    default:
      return state;
  }
}
export default productReducer;

