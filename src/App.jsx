import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-row">
      <Header />
      <div className="p-5 md:p-10 flex-1 transition-all duration-500">
        <div className="bg-white h-full rounded-xl border-[1px] border-[#eaeef0]">

        </div>
      </div>
    </div>
  );
}

export default App;
