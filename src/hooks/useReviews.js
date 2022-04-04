import axios from "axios";
import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('reviewData.json')
            .then(response => setReviews(response.data))
    }, []);

    return [reviews, setReviews];
};

export default useReviews;