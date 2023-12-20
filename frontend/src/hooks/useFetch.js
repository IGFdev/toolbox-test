import { useState, useEffect } from 'react';

const useFetch = (endpoint, options) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(endpoint, options);
            setData(await response.json());
            setIsLoading(false)
        } catch (error) {
            setError(error);
            console.log(error);
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data, isLoading, error
    };
}

export default useFetch;