import React from "react";
import { useFilterStore } from "../store/filter"
import qs from "qs"
import { useNavigate } from "react-router";

export const useFilter = () => {
    const navigate = useNavigate();
    const { activeCategory, activeSort } = useFilterStore()


    React.useEffect(() => {





        const query = qs.stringify({
            category: activeCategory,
            sort: activeSort
        });
        navigate(`?${query}`)


    }, [activeCategory, activeSort, navigate])

}