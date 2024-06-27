import {useState} from "react"
import './App.css'
import { CSSTransition } from 'react-transition-group';
import {requestGroqAi} from "./utils/groq"
import {Light as SyntaxHighLight} from "react-syntax-highlighter"
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism"


function App() {
  const [data, setData] = useState ("")


  const handleSubmit = async () => {
    const ai = await requestGroqAi(content.value)
    setData(ai);

  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };


  return (
    <main className='flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-gray-900 to-gray-700'>
      <h1 className='text-4xl text-indigo-500 mb-4 animate-bounce'>
        G<span className="text-pink-500">I</span>LS <span className="text-yellow-500">029</span>
      </h1>
      <form className='flex flex-col gap-4 py-4 items-center w-full max-w-md' onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder='Masukan pertanyaan'
          className='py-2 px-4 text-md rounded-md w-full bg-gray-800 text-white border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105'
          id="content"
          type='text'
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSubmit}
          type='button'
          className='bg-indigo-500 py-2 px-4 font-bold text-white rounded-md w-full hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105'
        >
          KIRIM
        </button>
      </form>
      <div className="max-w-md mt-4 w-full">
        <CSSTransition
          in={!!data}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <SyntaxHighLight language="swift" style={darcula} wrapLongLines={true}>
              {data}
            </SyntaxHighLight>
          </div>
        </CSSTransition>
      </div>
    </main>
  )
}


export default App
