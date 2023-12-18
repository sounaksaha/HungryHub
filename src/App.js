import PreLoader from './components/preLoader/PreLoader';
import { useEffect } from 'react';
import { useState } from 'react';
import {router} from './components/routes/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  
  const [loader, setLoader] = useState(true);

  useEffect(()=>{

    setTimeout(() => {
      setLoader(false);
    }, 4000);

  },[]);
  
  return (
    <>  
      {
        loader ? <PreLoader /> :
        <RouterProvider router={router} />
      }
    </>
  );
}

export default App;
