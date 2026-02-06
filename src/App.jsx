import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Username from "./pages/Username";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    // {
    //   path: "/events",
    //   element: (
    //     <>
         
    //     </>
    //   ),
    // },
    {
      path: "/feed",
      element: (
        <>
          <Feed />
        </>
      ),
    },
    {
      path: "/username",
      element: (
        <>
          <Username />
        </>
      ),
    },
  ]);
  return (
    <RouterProvider router={router} />
    
  );
}

export default App;
