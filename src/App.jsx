import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Nav from './pages/Nav';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </NextUIProvider>
    
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Nav />
      <Home />
    </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);


export default App;
