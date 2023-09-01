import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    useEffect(() => {
        getGifs(category);
    }, [])




    return (
        <>
            <h3 className="text-[40px]">{category}</h3>
       
        </>
    )
}
