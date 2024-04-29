import {useEffect} from "react";

function titleChange() {
    useEffect(() => {
        document.title = 'Petrik Autókölcsönző'; // Set the new title
    }, []); // Empty dependency array means this effect runs only once, after the component mounts

    return (
        <div>
            {/* Your component content */}
        </div>
    );
}

export default titleChange;