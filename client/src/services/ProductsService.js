import Api from '@/services/Api'

export default{
  fetchProducts() {
    return Api().get('products')
  },
  fetchProductsByCategory(categoryId){
    return Api().post('products', {category: categoryId})
  }
}