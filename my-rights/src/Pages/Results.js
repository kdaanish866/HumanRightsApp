import React, { useState} from 'react';
import OfficerList from '../Components/OfficerList';

const Results=()=> {
    const [officers, setOfficers] = useState([
    {
        "name": "John Doe",
        "badge": "12345",
        "id": "1"
    },
 
    ]);

    const handleDelete= (id) => {
        const newOfficers = officers.filter(officer => officer.id !== id);
        setOfficers(newOfficers);
    }


    return (
        <div className='results'>
            <OfficerList officers={ officers } title="Officers" handleDelete={handleDelete}/>
        </div>
    )
}

export default Results;