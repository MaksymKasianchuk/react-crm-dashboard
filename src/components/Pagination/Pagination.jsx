import { PaginationStyled } from "./Pagination.styled"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = () => {
    return (
        <PaginationStyled>
            <li className="prev"><FontAwesomeIcon icon={faChevronLeft}/></li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li className="dotted">...</li>
            <li>40</li>
            <li className="next"><FontAwesomeIcon icon={faChevronRight}/></li>
        </PaginationStyled>
    )
}

export default Pagination;
