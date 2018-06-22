import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/showBlog'
import SingeBlog from '@/components/SingeBlog'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    },
    {
      path: '/AddBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      name: 'SingeBlog',
      component: SingeBlog
    }
  ]
})
