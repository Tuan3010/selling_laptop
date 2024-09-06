import CartPage from "../pages/CartPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";




// Public Route
export const publicRoutes = [
    { path: '/detailpage', element: DetailPage },
    { path: '/cartpage', element: CartPage},
    { path: '/loginpage', element: Login, layout: null},
    { path: '/', element: HomePage},

]
// Private Route
export const privateRoutes = [

]