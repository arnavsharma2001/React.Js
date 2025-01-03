import { useCallback, useState, useRef, useEffect } from 'react'
import './index.css'

function App() {

  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState();
  const [charsAlllowed, setCharsAllowed] = useState();
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numsAllowed) str += "0987654321";
    if (charsAlllowed) str += "!@#$%^&*()<>{}[]_-+="

    for (let i = 0; i < length; i++) {  
      let char = Math.floor(Math.random() * str.length);  
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numsAllowed, charsAlllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [numsAllowed, charsAlllowed, length, passwordGenerator])



  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-justify-centre py-8 my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type='text'
          value={password}
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          readOnly
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy Password</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type='checkbox'
            defaultChecked='numsAllowed'
            id='numberInput'
            onChange={() => {
              setNumsAllowed((prev) => !prev);
            }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type='checkbox'
            defaultChecked='charsAllowed'
            id='charsInput'
            onChange={() => {
              setCharsAllowed((prev) => !prev);
            }} />
          <label htmlFor="charsInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
