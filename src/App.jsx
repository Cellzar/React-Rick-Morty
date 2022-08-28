import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GridCard } from "./components/GridCard";

export const App = () => {

    const [categories, setCategories] = useState(['Beth']);

    const addCategory = (category) => {

        if (categories.includes(category)) return;

        setCategories([category, ...categories]);
    }

    return (
        <>
            <div className="container">
                <h1>Rick & Morty

                </h1>
                <AddCategory newCategory={addCategory}></AddCategory>

                {
                    categories.map((category) => {
                        return (<GridCard key={category} newCategory={category} />)
                    })
                }
            </div>
        </>
    )
}
