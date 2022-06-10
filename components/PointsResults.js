import React, { useState, useEffect } from "react";
import ResponsiveGrid from "./ResponsiveGrid/index";
function PointsCalculation(customers) {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let pointsArr = [];
    let sum = 0;
    const pointsByTransaction = customers.map((transaction) => {
        let points = 0;
        if (transaction.amount > 0) {
            points = (transaction.amount - 100) * 2;
        }
        if (transaction.amount > 50) {
            points = points + 50;
        }
        const month = new Date(transaction.transactionDate).getMonth();
        pointsArr.push(points);
        sum = pointsArr.reduce((partialSum, a) => partialSum + a, 0);

        return { ...transaction, points, month, sum };
    });

    let Customer = {};
    let TotalPointsCustomer = {};
    pointsByTransaction.forEach((pointsByTransaction) => {
        let { id, name, month, points, sum } = pointsByTransaction;

        if (!Customer[id]) {
            Customer[id] = [];
        }
        if (!TotalPointsCustomer[id]) {
            TotalPointsCustomer[name] = 0;
        }

        TotalPointsCustomer[name] += sum;
        if (Customer[id][month]) {
            Customer[id][month].points += points;
            Customer[id][month].monthNumber = month;
            Customer[id][month].numTransactions++;
        } else {
            Customer[id][month] = {
                id,
                name,
                monthNumber: month,
                month: months[month],
                numTransactions: 1,
                sum,
                points
            };
        }

    });

    let total = [];
    for (var customerKey in Customer) {
        Customer[customerKey].forEach((cRow) => {
            total.push(cRow);
        });
    }
    let TotalsCustomer = [];
    for (customerKey in TotalPointsCustomer) {
        TotalsCustomer.push({
            name: customerKey,
            points: TotalPointsCustomer[customerKey],
        });
    }
    return {
        summaryCustomer: total,
        pointsByTransaction,
        TotalPointsCustomer: TotalsCustomer,

    };
}

const PointsResults = ({ customers }) => {
    const [transactionData, setTransactionData] = useState(null);

    const columns = [
        {
            Header: "Customer",
        },
        {
            Header: "Month",
        },
        {
            Header: "Transactions",
        },
        {
            Header: "Points",
        },
    ];
    const ColumnsTotals = [
        {
            Header: "Customer",
        },
        {
            Header: "Rewards",
        },
    ];

    useEffect(() => {
        setTransactionData(PointsCalculation(customers));
    }, []);

    if (transactionData == null) {
        return <div>Loading</div>;
    }

    return transactionData == null ? (
        <div>Loading</div>
    ) : (
        <div>
            <ResponsiveGrid
                data={transactionData.summaryCustomer}
                title={"Customer Points"}
                columns={columns}
                size={"1"}
            />
            <ResponsiveGrid
                data={transactionData.TotalPointsCustomer}
                title={"Customer Points Totals"}
                columns={ColumnsTotals}
                size={"1"}
            />
        </div>
    );

}

export default PointsResults;
