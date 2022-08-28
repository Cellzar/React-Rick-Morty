import { useFetchData } from "../hooks/useFetchData";
import { GridItem } from "./GridItem";


export const GridCard = ({ newCategory }) => {

    const { datas, isLoading } = useFetchData(newCategory);


    return (
        <>
            {
                isLoading && <h3>CARGANDO...</h3>
            }

            <h2 className="title">{newCategory}</h2>
            <div className="card__container">
                {
                    datas.map((data) => {
                        return (<GridItem  {...data} />)
                    })
                }
            </div>
        </>
    )
}
