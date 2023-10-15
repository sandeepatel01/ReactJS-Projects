import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor('#FF671F')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: '#FF671F' }}>Saffron</button>

            <button
              onClick={() => setColor('#FFFFFF')}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: '#FFFFFF' }}>White</button>

            <button
              onClick={() => setColor('#046A38')}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: '#046A38' }}>Green</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
