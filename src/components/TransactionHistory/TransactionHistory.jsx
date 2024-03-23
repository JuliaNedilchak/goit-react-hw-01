import css from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';
function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.line}>Type</th>
          <th className={css.line}>Amount</th>
          <th className={css.line}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionHistoryItem
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
}
export default TransactionHistory;
