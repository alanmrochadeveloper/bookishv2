import { useEffect, useState } from "react";
import axios from "axios";

export const useRemoteService = (initial) => {
    const [data, setData] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
<<<<<<< HEAD
=======
        console.log('inside use effect in remote service hook')
>>>>>>> 1413a4ac75ff574c3691b5b56413919e795b269a
        const fetchBooks = async () => {
            setError(false);
            setLoading(true);
            try {
                const res = await axios.get('http://localhost:8080/books');
                setData(res.data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);
    return { data, loading, error };
};