import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });

    const [formData, setFormData] = useState({
        detail: "",
        amount: "",
        category: "",
        date: "",
        note: "",
    });

    const [food, setFood] = useState([]);
    const [travel, setTravel] = useState([]);
    const [bills, setBills] = useState([]);
    const [others, setOthers] = useState([]);

    const [filterData, setFilterData] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [showActive, setShowActive] = useState(false);

    const [value, setValue] = useState("data");

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Spent Amount",
                data: [],
                backgroundColor: [],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 1,
            },
        ],
    });

    // -------------------------------------
    // FIXED: Clean and correct calculation
    // -------------------------------------
    useEffect(() => {
        const foodFilter = data.filter((item) => item.category === "food");
        const travelFilter = data.filter((item) => item.category === "travel");
        const billsFilter = data.filter((item) => item.category === "bills");
        const othersFilter = data.filter((item) => item.category === "others");

        const foodAmount = foodFilter.reduce((sum, item) => sum + Number(item.amount), 0);
        const travelAmount = travelFilter.reduce((sum, item) => sum + Number(item.amount), 0);
        const billsAmount = billsFilter.reduce((sum, item) => sum + Number(item.amount), 0);
        const otherAmount = othersFilter.reduce((sum, item) => sum + Number(item.amount), 0);

        setFood(foodFilter);
        setTravel(travelFilter);
        setBills(billsFilter);
        setOthers(othersFilter);

        setChartData({
            labels: ["Food", "Travel", "Bills", "Others"],
            datasets: [
                {
                    label: "Spent Amount",
                    data: [foodAmount, travelAmount, billsAmount, otherAmount],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255, 206, 86, 0.7)",
                        "rgba(75, 192, 192, 0.7)",
                    ],
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                },
            ],
        });
    }, [data]); // FIXED: removed chartData to stop infinite loop

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);
        setShowActive(true);

        if (val === "data") setActiveData(data);
        else if (val === "food") setActiveData(food);
        else if (val === "travel") setActiveData(travel);
        else if (val === "bills") setActiveData(bills);
        else setActiveData(others);
    };

    const handleDate = (e) => {
        const filterDate = data.filter((item) => item.date === e.target.value);
        setActiveData(filterDate);
        setShowActive(true);
    };

    const handleRange = (e) => {
        const filterRange = data.filter((item) => Number(item.amount) >= Number(e.target.value));
        setValue(e.target.value);
        setActiveData(filterRange);
        setShowActive(true);
    };

    return (
        <userContext.Provider
            value={{
                data,
                setData,
                formData,
                setFormData,
                food,
                travel,
                bills,
                others,
                chartData,
                filterData,
                setFilterData,
                handleChange,
                handleDate,
                showActive,
                activeData,
                value,
                handleRange,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
