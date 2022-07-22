import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Login from './components/LoginForm.vue'
import Navbar from './components/Navbar.vue'
import ListDetail from './components/ListDetail.vue'
export const routes = [
    {path: '/login' ,  name: 'login', component: Login},
    {path: '/about' , component: About,
    children: [{ path: "/about/:id", component: ListDetail }]
},
    {path: '/contact' , component: Contact},
    {path: '/navbar' , component: Navbar},
    {path: '/' , component: Home},
   


    ];