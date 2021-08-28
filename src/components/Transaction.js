import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount === 0 ? "" : transaction.amount > 0 ? "+" : "-";
	return (
		<li className={sign === "" ? "neutral" : sign === "-" ? "minus" : "plus"}>
			{transaction.text}{" "}
			<span>
				{sign} ₹{Math.abs(transaction.amount)}
			</span>
			<button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
				x
			</button>
		</li>
	);
};

export default Transaction;

Transaction.prototype = {
	transaction: PropTypes.object.isRequired,
};
