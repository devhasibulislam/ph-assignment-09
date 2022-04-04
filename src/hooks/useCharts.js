import axios from "axios";
import { useEffect, useState } from "react";

const useCharts = () => {
    const [charts, setCharts] = useState([]);
    useEffect(() => {
        axios.get('chartsData.json')
        .then(response => setCharts(response.data))
    }, []);

    return [charts, setCharts];
};

export default useCharts;