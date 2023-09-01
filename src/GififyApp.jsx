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
            <h1 className="text-center text-[45px]">Gifify App</h1>
            <AddCategory onNewCategory={onAddCategory} />


            {categories.map(category => (<GifGrid category={category} />))}

        </>
    )
}
