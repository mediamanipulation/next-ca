import React, { useState, useEffect } from "react";
import ResponsiveGrid from "./ResponsiveGrid/index";
function PointsCalculation(customers) {

    let summaryCustomerSorted = [];
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
    const summaryCustomerPoints = pointsByTransaction.reduce((acc, curr) => {
        if (!acc[curr.name]) {
            acc[curr.name] = {
                name: curr.name,
                points: curr.points,
            };
        } else {
            acc[curr.name].points += curr.points;
        }
        return acc;
    }
        , []);

    const summaryCustomer = Object.values(summaryCustomerPoints);
    summaryCustomerSorted = summaryCustomer.sort((a, b) => b.points - a.points);

    let customer = {};
    let totalPointsCustomer = {};
    pointsByTransaction.forEach((pointsByTransaction) => {
        let { id, name, month, points, sum, summaryCustomerSorted } = pointsByTransaction;

        if (!customer[id]) {
            customer[id] = [];
        }

        if (!totalPointsCustomer[id]) {
            totalPointsCustomer[name] = 0;
        }

        totalPointsCustomer[name] += sum;
        if (customer[id][month]) {
            customer[id][month].points += points;
            customer[id][month].monthNumber = month;
            customer[id][month].numTransactions++;
        } else {
            customer[id][month] = {
                id,
                name,
                monthNumber: month,
                month: months[month],
                numTransactions: 1,
                sum,
                points,
                summaryCustomerSorted,
            };
        }

    });

    let total = [];
    for (var customerKey in customer) {
        customer[customerKey].forEach((cRow) => {
            total.push(cRow);
        });
    }
    let TotalsCustomer = [];
    for (customerKey in totalPointsCustomer) {
        TotalsCustomer.push({
            name: customerKey,
            points: totalPointsCustomer[customerKey],
        });
    }
    return {
        summaryCustomer: total,
        pointsByTransaction,
        totalPointsCustomer: summaryCustomerSorted,

    };
}

const PointsResults = ({ customers }) => {
    const [transactionData, setTransactionData] = useState(null);

    const pointsByMonth = [
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
    const rewardTotals = [
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
                title={"Customer Points By Month"}
                columns={pointsByMonth}
                size={"1"}
            />
            <ResponsiveGrid
                data={transactionData.totalPointsCustomer}
                title={"Customer Reward Totals"}
                columns={rewardTotals}
                size={"1"}
            />
        </div>
    );

}

export default PointsResults;
