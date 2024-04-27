export default function Header({ onPage, page }) {
  return (
    <div className="h-screen border-x-[1px] border-[#eee] w-[60px] md:w-[190px]">
      <div className="flex flex-row items-center gap-2 pl-1 mt-5 border-b-[1px] border-[#eee] pb-3 ">
        <img
          src="logo.png"
          alt="logo"
          className="w-[30px] h-[30px] ml-[9px] md:ml-0 transition-all duration-500"
        />
        <p className="text-[14px] font-bold hidden md:block transition-all duration-500">
          Stock Simulator
        </p>
      </div>
      <div>
        <ul className="mt-5 px-2">
          <li
            className="flex flex-row items-center gap-1 py-2 pl-0 md:pl-4 mb-2 hover:bg-gray-200 rounded-md transition-all duration-500 cursor-pointer"
            onClick={() => onPage('simulador')}
          >
            <i
              className={`fa-solid fa-chart-column pl-[10px] md:pl-0 transition-all duration-500 ${
                page === 'simulador' ? 'text-red-500' : ''
              }`}
            ></i>
            <p
              className={`text-[14px] font-bold hidden md:block transition-all duration-500 ${
                page === 'simulador' ? 'text-red-500' : ''
              }`}
            >
              Simulador
            </p>
          </li>
          <li
            className="flex flex-row items-center gap-1 py-2 pl-0 md:pl-4 mb-2 hover:bg-gray-200 rounded-md transition-all duration-500 cursor-pointer"
            onClick={() => onPage('metodoBarsi')}
          >
            <i
              className={`fa-solid fa-basket-shopping pl-[10px] md:pl-0 transition-all duration-500 ${
                page === 'metodoBarsi' ? 'text-[#ff5555]' : ''
              }`}
            ></i>
            <p
              className={`text-[14px] font-bold hidden md:block transition-all duration-500 ${
                page === 'metodoBarsi' ? 'text-[#ff5555]' : ''
              }`}
            >
              Método Barsi
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
