import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoveToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;  // This component does not render anything
};

export default MoveToTop;
