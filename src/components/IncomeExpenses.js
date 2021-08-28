import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const income = amounts.filter((amount) => amount > 0).reduce((a, b) => a + b, 0);
	const expense = Math.abs(amounts.filter((amount) => amount < 0).reduce((a, b) => a + b, 0));

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<div className="money plus">₹{income}</div>
			</div>
			<div>
				<h4>Expense</h4>
				<div className="money minus">₹{expense}</div>
			</div>
		</div>
	);
};

export default IncomeExpenses;
