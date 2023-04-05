import { useState } from 'react';
import TableItem from 'components/TableItem';
import TableSearch from 'components/TableSearch';
import Pagination from 'components/Pagination/Pagination';
import { TableStyled, TableHeader, TableBodyWrapper, TableBody, TableFooter } from './Table.styled';
import { customersList } from 'constants/data';

const Table = () => {
    const [ filter, setFilter ] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.currentTarget.value);
    };

    const getFilteredCustomers = () => {
        const normalizedFilter = filter.toLowerCase();
        const filteredCustomers = customersList.filter( 
            customer => 
            customer.name.toLowerCase().includes(normalizedFilter) || 
            customer.company.toLowerCase().includes(normalizedFilter) ||
            customer.phone.toLowerCase().includes(normalizedFilter) ||
            customer.email.toLowerCase().includes(normalizedFilter) ||
            customer.country.toLowerCase().includes(normalizedFilter) ||
            customer.status.toLowerCase().startsWith(normalizedFilter)
        );
        return filteredCustomers;
    };

    const filteredCustomers = getFilteredCustomers();

    return (
        <TableStyled>
            <TableHeader>
                <div>
                    <h2>All Customers</h2>
                    <p>Active Members</p>
                </div>
                <TableSearch handleChange={handleFilterChange}/>
            </TableHeader>
            <TableBodyWrapper>
                <TableBody>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Company</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCustomers.map(
                                ({ id, name, company, phone, email, country, status }) => (
                                    <TableItem 
                                        key={id}
                                        name={name} 
                                        company={company} 
                                        phone={phone} 
                                        email={email}
                                        country={country} 
                                        status={status}
                                    />
                                )
                            )
                        }
                    </tbody>
                </TableBody>
            </TableBodyWrapper>
            <TableFooter>
                <p>Showing data 1 to 8 of  256K entries</p>
                <Pagination />
            </TableFooter>
        </TableStyled>
    )
}

export default Table;
