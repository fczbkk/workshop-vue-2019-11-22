import Categories from '../Categories'
import CategoryDetail from '../CategoryDetail'

export default [
  {
    path: '/category-list',
    name: 'categories',
    component: Categories
  },
  {
    path: '/category/:category_id',
    name: 'categoryDetail',
    component: CategoryDetail
  }
]
