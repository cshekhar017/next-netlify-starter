export const config = {
    unstable_runtimeJS: false,
  };
  
  import { useEffect, useState } from "react";
  
  export default function Withoutscript(props) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      setValue(100);
    }, []);
  
    return (
      <ul>
        <li key={10}>{value}</li>
      </ul>
    );
  }
  