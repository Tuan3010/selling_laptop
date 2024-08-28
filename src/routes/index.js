import CartPage from "../pages/CartPage"
import DetailPage from "../pages/DetailPage"
import HomePage from "../pages/HomePage"



// Public Route
export const publicRoutes = [
    { path: '/detailpage', element: DetailPage },
    { path: '/cartpage', element: CartPage},
    { path: '/', element: HomePage, layout: null},

]
// Private Route
export const privateRoutes = [

]