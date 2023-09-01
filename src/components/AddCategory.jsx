import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                value={inputValue}
                onChange={onInputChange}
                type="text"
                laceholder="Buscar gifs"
                className="bg-white rounded border border-purple-600 text-black text-xl focus:outline-none p-2.5 w-full"
            />
        </form>
    )
}

