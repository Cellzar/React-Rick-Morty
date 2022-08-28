import { useState } from "react"

export const AddCategory = ({ newCategory }) => {
    console.log(newCategory);
    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        newCategory(inputValue);
        setInputValue('');
    }

    return (
        <><form onSubmit={onSubmit}>
            <div className="form__group">

                <input
                    type="text"
                    placeholder=" "
                    className="input"
                    value={inputValue}
                    onChange={onChange} />
                <label htmlFor="" className="input__label">Buscar</label>
                <span className="input__bar"></span>
            </div>
        </form>

        </>
    )
}
