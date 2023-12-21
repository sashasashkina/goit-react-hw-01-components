import { TransactionItem } from "components/TransactionItem/TransactionItem";

 import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(item => {
                    return (
                        <TransactionItem
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};