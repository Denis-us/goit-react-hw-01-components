import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return <table className={styles.transactionHistory}>
        <thead className={styles.name}>
            <tr className={styles.transactionHeading}>
                <th className={styles.element}>Type</th>
                <th className={styles.element}>Amount</th>
                <th className={styles.element}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => (
                <tr className={styles.transactionContent} key={item.id}>
                    <td className={styles.element}>{item.type}</td>
                    <td className={styles.element}>{item.amount}</td>
                    <td className={styles.element}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id:PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}

export default TransactionHistory;