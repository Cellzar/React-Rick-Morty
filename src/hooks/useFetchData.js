import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";


export const useFetchData = (newCategory) => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getRegister = async () => {
        const data = await getData(newCategory);
        setDatas(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getRegister();
    }, []);

    return {
        datas,
        isLoading
    };
}
