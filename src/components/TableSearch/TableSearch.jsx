import { nanoid } from 'nanoid';
import {ReactComponent as SearchIcon} from 'img/search.svg';
import { TableSearchStyled } from './TableSearch.styled'

const TableSearch = ({ handleChange }) => {
    const filterId = nanoid();
    return (
        <TableSearchStyled>
            <SearchIcon className="search-icon" />
            <input type="text" name="filter" id={filterId} onChange={handleChange} placeholder='Search'/>
        </TableSearchStyled>
    )
};

export default TableSearch;