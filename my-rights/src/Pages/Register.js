import {useState} from 'react';
import '../Css/Register.css';

function Register(){

    const[name, setName] = useState('');
    const[badge, setBadge] = useState('');
    // const onChange = (e) => {
    //     const value = e.target;

    //     setName(value);
    // }

    const showData = () => {
        console.log('Name: ', name)
        console.log('Badge: ', badge)
    }
  return (
    <div className="register container">
            <form className='register-form form-inner'>
                <h2>Register</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='badge'>Badge Number:</label>
                    <input value={badge} onChange={(e) => setBadge(e.target.value)} type="text" name="badge" id="badge" />
                </div>
                <input onClick={showData} className="search-button"type="submit" value="Register"/>
                <ul>
                    <a href='#'>Already have an account? Click here.</a>
                </ul>
            </form>
    </div>

  )
}

export default Register;
