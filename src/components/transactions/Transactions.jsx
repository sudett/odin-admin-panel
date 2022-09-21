import React, {useState, useEffect} from 'react';

import './Transactions.css';

const transactionsData = [
  {
    id: '#5679836',
    productName: 'Acer Nitor',
    productImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'John Smith',
    date: '2 June',
    amount: 479,
    paymentMethod: 'Cash on delivery',
    status: 'approved'
  },
  {
    id: '#5788439',
    productName: 'ASUS ROG',
    productImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'John Doe',
    date: '3 March',
    amount: 789,
    paymentMethod: 'Online payment',
    status: 'pending'
  },
  {
    id: '#5678493',
    productName: 'Acer Nitor',
    productImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'Jane Smith',
    date: '18 March',
    amount: 4893,
    paymentMethod: 'Cash on delivery',
    status: 'pending'
  },
  {
    id: '#6472345',
    productName: 'ASUS PROG',
    productImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'James Peterson',
    date: '27 Jan',
    amount: 389,
    paymentMethod: 'Online',
    status: 'approved'
  },
  {
    id: '#6483339',
    productName: 'Playstation',
    productImage: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    customer: 'Julia Doe',
    date: '2 September',
    amount: 687,
    paymentMethod: 'Online Payment',
    status: 'pending'
  },
]

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <div className='transactions'>
      <h4 className='transactions__title'>Latest Transactions</h4>
      <table className='transactions__table'>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((({id, productName, productImage, customer, date, amount, paymentMethod, status}, idx) => 
          <tr key={idx}>
            <td>{id}</td>
            <td className='transactions__product-container'><img className='transactions__img' src={productImage} alt="computer"/><span>{productName}</span></td>
            <td>{customer}</td>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{paymentMethod}</td>
            <td><span className={`${status === 'approved' ? 'transactions__status--approved' : 'transactions__status--pending'} transactions__status`}>{status}</span></td>
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions