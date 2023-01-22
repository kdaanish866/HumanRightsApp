import {useState} from 'react';
import './Register.css';

function App(){

    const[name, setName] = useState('');
    const onChange = (e) => {
        const value = e.target;

        setName(value);
    }

    const showData = () => {
        console.log('Name: ', name)
    }
  return (
    <div className = "Register">
        <header className = "Register-header">
            <form>
                <label>
                    Name:
                    <input onChange={onChange} name="name" value = {name}/> 
                </label>
                <button>onClick={showData}Submit</button>
            </form>
        </header>
    </div>

  )
}

export default App;
