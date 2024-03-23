import css from './TransactionHistoryItem.module.css';
function TransactionHistoryItem({ type, amount, currency, id }) {
  return (
    <tr key={id}>
      <td className={css.info}>{type}</td>
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </tr>
  );
}
export default TransactionHistoryItem;
