import css from "./TransactionItem.module.css"

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.transactionHistoryTableType}>{type}</td>
      <td>{amount}</td>
      <td className={css.transactionHistoryTableCurrency}>{currency}</td>
    </tr>
  );
};
