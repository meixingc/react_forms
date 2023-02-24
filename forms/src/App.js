import './App.css';
import { useState } from 'react'
import Practice from './Practice';


function App() {

  const initialState = {
    username: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    setFormState({...formState, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    setFormState(initialState);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'> Username: </label>
        <input id='username' type='text' onChange={handleChange} value={formState.username} />
        
        {/* <label htmlFor='email'> Email: </label>
        <input id='email' type='email' /> */}
        
        <label htmlFor='password'> Password: </label>
        <input id='password' type='password' onChange={handleChange} value={formState.password} />

        <button type='submit'> Login </button>
      </form>

      <Practice />
      
    </div>
  );
}

export default App;
