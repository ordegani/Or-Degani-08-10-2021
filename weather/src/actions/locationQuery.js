import { useState } from "react";

const LocationQuery = (e) =>{
    const [query, setquery] = useState("")
    setquery(e.target.value);
}
export default LocationQuery;