import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

import Auth from './components/Auth.vue';
import AuthSuccess from './components/AuthSuccess.vue';

export default [
  { path: '/bloglist', component: showBlogs},
  { path: '/add', component: addBlog},
  { path: '/blog/:id', component: singleBlog},
  { path: '/auth', component: Auth },
  { path: '/success', component: AuthSuccess }
]