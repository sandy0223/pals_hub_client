import { Navbar, ShowAllData } from './components'

function App() {


  return (
    <>
    <div className='flex flex-col'>
      <Navbar />

      {/* body area */}
      {/* xl:bg-red-800 */}
      <div
      className='p-16 md:mt-8 flex text-2xl font-[Poppins]  xl:max-w-7xl m-auto flex-col'
      >

        <ShowAllData />
      </div>
      </div>
    </>
  )
}

export default App
