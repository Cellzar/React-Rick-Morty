
export const GridItem = ({ id, name, img, gender, species }) => {

    return (
        <div className="card">
            <img src={img} alt={name} className="card__img" />
            <div className="card__texts">
                <h3 className="card__title">{name}</h3>
                <p className="card__paragraph"> Sexo: {gender}</p>
                <p className="card__paragraph"> Especie: {species}</p>
            </div>

        </div>
    )
}
