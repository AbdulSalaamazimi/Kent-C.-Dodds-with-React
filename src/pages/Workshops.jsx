import { useEffect } from "react";


function Workshops() {
    useEffect(() => {
        document.title = "Workshops with Kent C. Dodds"
    })

    return (
        <div><h2>WorkShops page</h2></div>
    )
}

export default Workshops