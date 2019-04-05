import Api from '@/services/Api'

export default{
  fetchCategories() {
    return Api().get('categories')
  }
}