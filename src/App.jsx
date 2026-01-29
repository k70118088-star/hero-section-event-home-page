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
    // {
    //   path: "/",
    //   element: (
    //     <>
    //       <Home />
    //     </>
    //   ),
    // },
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
    // <Routes>
    // <Route path="/" element={<Home />} />
    //  <Route path="/feed" element={<Feed />} />
    //  <Route path="/username" element={<Username />} />
    // </Routes>
  );
}

export default App;
