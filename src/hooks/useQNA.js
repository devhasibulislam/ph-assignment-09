import axios from "axios";
import { useState } from "react";

const useQNA = () => {
    const [qna, setqna] = useState([]);
    useState(() => {
        axios.get('qnaData.json')
            .then(response => setqna(response.data))
    }, []);

    return [qna, setqna];
};

export default useQNA;