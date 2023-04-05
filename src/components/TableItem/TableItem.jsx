import { TableItemStyled } from './TableItem.styled';

const TableItem = ({ name, company, phone, email, country, status }) => {
    return (
        <TableItemStyled>
            <td>{name}</td>
            <td>{company}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{country}</td>
            <td><span className={status === 'Active' ? 'active' : 'inactive'}>{status}</span></td>
        </TableItemStyled>
    )
}

export default TableItem
