import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifCard } from './GifCard';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
    }

    useEffect(() => {
        getImages();
    }, [category])




    return (
        <>
            <div className="text-center">
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mt-4 bg-blue-600 rounded-md inline-block px-2">{category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-[calc(100vw - 128px)]">
                {images.map(img => (
                    <GifCard img={img} />
                ))}
            </div>
        </>
    )
}
