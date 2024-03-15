import {useEffect, useState} from 'react';

  export default function Withscript(props) {
    const [value, setValue] = useState(0);
    useEffect(()=>{
        setValue(100);
    },[])
    
    return (
      <ul>
       <li key={10}>
                {value}
            </li>
      </ul>
    );
  }
  