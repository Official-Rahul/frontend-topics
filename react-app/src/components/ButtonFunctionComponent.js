import React, { useEffect, useState } from 'react'

function ButtonFunctionComponent() {

    const [buttonText, setButtonText]=useState('Click me!');
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://run.mocky.io/v3/344bd879-8bad-4a02-b5d6-173e8c8e1af0')
            .then(res=>res.json())
            .then((res=>setData(res)))
        
        return ()=>console.log('unmount');
    },[])

    return (
        <div>
            <button onClick={()=>setButtonText('I am clicked!')}>{buttonText}</button>
            <ul>
                {data.map(entry=>(
                    <li key={entry.title}>{entry.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ButtonFunctionComponent
