import { useState } from "react";
import { AddCategory, GifGrid } from './components';



export const GififyApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl text-center my-[25px]">Gifify App</h1>
            <AddCategory onNewCategory={onAddCategory} />


            {categories.map(category => (<GifGrid category={category} />))}

        </>
    )
}
