import { createRouter, createWebHistory } from "vue-router";
import PostsView from "@/views/PostsView.vue";
import PostView from "@/views/PostView.vue";
import AuthorView from "@/views/AuthorView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'posts',
      meta: { layout: 'FirstLayout' },
      component: PostsView
    },
    {
      path: '/authors',
      name: 'authors',
      meta: { layout: 'SecondLayout' },
      component: () => import('../views/AuthorsView.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      meta: { layout: 'SecondLayout' },
      component: PostView
    },
    {
      path: '/author/:username',
      name: 'author',
      meta: { layout: 'ThirdLayout' },
      component: AuthorView
    }
  ]
})

export default router;