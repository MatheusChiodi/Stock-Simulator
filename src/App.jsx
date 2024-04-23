import { useState } from 'react';

import Header from './components/Header';
import Simulador from './pages/Simulador';
import MetodoBarsi from './pages/MetodoBarsi';

function App() {
  const [page, setPage] = useState('simulador');

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <div className="flex flex-row">
      <Header onPage={handlePage} page={page} />
      <div className="p-5 w-full h-screen transition-all duration-500 flex justify-center items-center">
        <div className="bg-white w-full h-[90%] rounded-xl border-[1px] border-[#eaeef0] p-5 shadow-sm ">
          {page === 'simulador' && <Simulador />}
          {page === 'metodoBarsi' && <MetodoBarsi />}
        </div>
      </div>
    </div>
  );
}

export default App;
