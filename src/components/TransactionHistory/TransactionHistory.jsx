import css from "./TransactionHistory.module.css"
import { TransactionItem } from "components/TransactionItem/TransactionItem";



 export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr className={css.transactionHistoryTableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionHistoryTableBody}>
        {transactions.map(({id, type, amount, currency}) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};
