import {useState} from 'react';
import '../Css/Register.css';

function Register(){

    const[name, setName] = useState('');
    const[badge, setBadge] = useState('');
    const onChange = (e) => {
        const value = e.target;

        setName(value);
    }

    const showData = () => {
        console.log('Name: ', name)
        console.log('Badge: ', badge)
    }
  return (
    <div className = "register container">
            <form className='register-form form-inner'>
                <h2>Register</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={onChange} type="text" name="name" id="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='badge'>Badge Number:</label>
                    <input onChange={onChange} type="text" name="badge" id="badge" />
                </div>
                <input onClick={showData} className="search-button"type="submit" value="Register"/>
            </form>
    </div>

  )
}

export default Register;
