import {useState} from 'react';
import '../Css/Register.css';
import {useHistory} from 'react-router-dom'


function Register(){

    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[badge, setBadge] = useState('');

    const[isPending, setisPending] = useState(false);
    const history = useHistory();   
    
    const handleSubmit = e => {
        e.preventDefault();

        const name = firstname + ' ' + lastname;
        const officer = { name, badge };

        setisPending(true);

        fetch('http://localhost:3000/officers', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(officer)
        }).then(()=> {
            console.log("signed up officer ");
            setisPending(false);
            history.push('/results');
        })

    }



  return (
    <div className="register container">
            <form onSubmit={handleSubmit} className='register-form form-inner'>
                <h2>Register</h2>
                {/* ERROR! */}
                <div className='form-group'>
                    <label htmlFor='firstname'>First Name:</label>
                    <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstname" id="firstname" />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastname'>Last Name:</label>
                    <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" name="lastname" id="lastname" />
                </div>
                <div className='form-group'>
                    <label htmlFor='badge'>Badge Number:</label>
                    <input value={badge} onChange={(e) => setBadge(e.target.value)} type="text" name="badge" id="badge" />
                </div>
                { !isPending && <input className="search-button"type="submit" value="Register"/> }
                { isPending && <input disabled className="search-button"type="submit" value="Registering..."/> }

                <ul>
                    <a href='/'>Already have an account? Click here.</a>
                </ul>
            </form>
    </div>

  )
}

export default Register;
