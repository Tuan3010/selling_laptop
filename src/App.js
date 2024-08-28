import { createBrowserRouter,Link,RouterProvider } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Fragment } from "react";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <CartPage />,
  },
])

function App() {

  
  return (
    <Router>
      <div className="App">      
          <Routes>
            
            {publicRoutes.map((item,index) => {
              let Layout = DefaultLayout;
              
              if (item.layout) {
                Layout = item.layout
              }else if(item.layout === null){
                Layout = Fragment
              }
              
              
              return (<Route
                 key={index} 
                 path={item.path} 
                 element={<Layout><item.element /></Layout>}
              />)
            })}
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
