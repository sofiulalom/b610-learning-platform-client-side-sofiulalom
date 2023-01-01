
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { routes } from './Routes/Routes';

function App({children}) {
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
