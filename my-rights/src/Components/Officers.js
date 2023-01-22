import React, { useEffect, useState} from 'react';

function Officers() {
    const [officers, setOfficers] = useState([
        
    ]);

    useEffect(() => {
        fetch("/officers/").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setOfficers(jsonRes.officersList))
    })

    return (<div>
        {officers.map(officer => <li>{officer}</li>)}
    </div>)
}

export default Officers;