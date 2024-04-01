import css from './SearchBox.module.css'

import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../redux/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";

export default function SearchBox() {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    return (
        <div className={css.box}>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" value={filter} onChange={ (e) => dispatch(changeFilter(e.target.value)) } />
        </div>
    )
}
