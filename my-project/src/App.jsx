export default function App() {
  return (
    <div className="bg-amber-100 p-8 flex flex-col h-screen">
      <div className="grid grid-cols-15 grid-rows-10 bg-[#201e1e] flex-1 rounded-lg">

        <div className="bg-amber-400 col-span-15 row-span-1 flex items-center justify-center">
          <div className="h-full w-full grid grid-col-15 grid-rows-1">
            <div className="col-span-1 bg-amber-800"></div>
            <div className="col-span-1 bg-amber-300"></div>
            <div className="col-span-1 bg-amber-500"></div>
            <div className="col-span-9 bg-amber-300"></div>
            <div className="col-span-3 bg-red-500"></div>
          </div>
        </div>

        <div className="bg-purple-400 col-span-5 row-span-9 flex items-center justify-center">
          <p>Full Width</p>
        </div>

        <div className="bg-yellow-400 col-span-10 row-span-9 flex items-center justify-center">
          <p>Full Width</p>
        </div>
      </div>
    </div>
  )
}
