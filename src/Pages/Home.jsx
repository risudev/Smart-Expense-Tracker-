import React, { useContext, useState } from "react";
import { userContext } from "../Context/userContext";
import BarChart from "../Components/BarChart";

const Home = () => {
    const {
        data,
        setData,
        formData,
        setFormData,
        food,
        bills,
        travel,
        others,
        chartData,
        showActive,
        activeData
    } = useContext(userContext);

    const [sortByRecent, setSortByRecent] = useState(true);
    const [filterCategory, setFilterCategory] = useState("data");
    const [rangeAmount, setRangeAmount] = useState(0);
    const [filterDate, setFilterDate] = useState("");

    // ✅ Add Entry
    const handleSubmit = (e) => {
        e.preventDefault();
        const amount = parseInt(formData.amount);

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount greater than 0");
            return;
        }

        const newEntry = { ...formData, amount, id: Date.now() };
        const updatedData = [...data, newEntry];
        setData(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));

        setFormData({ detail: "", amount: "", category: "", date: "", note: "" });
        document.getElementById("my_modal_1").close();
    };

    // ✅ Delete Entry
    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        localStorage.setItem("data", JSON.stringify(updatedData));
    };

    // ✅ Filter and Sort
    let displayedData = showActive ? activeData : data;

    if (filterCategory !== "data") {
        displayedData = displayedData.filter((item) => item.category === filterCategory);
    }

    if (filterDate) {
        displayedData = displayedData.filter((item) => item.date === filterDate);
    }

    if (rangeAmount > 0) {
        displayedData = displayedData.filter((item) => parseInt(item.amount) <= rangeAmount);
    }

    if (!sortByRecent) {
        displayedData = displayedData.slice().sort((a, b) => b.amount - a.amount);
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4">

            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 p-4 rounded-lg text-white shadow-lg mb-6">
                <h1 className="text-3xl font-extrabold">Expense Tracker</h1>
                <span className="mt-2 md:mt-0 italic">Spend Smart Today, Smile Tomorrow</span>
            </header>

            {/* Summary */}
            <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <button
                        onClick={() => document.getElementById("my_modal_1").showModal()}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md"
                    >
                        ➕ Add New Entry
                    </button>
                    <h2 className="text-2xl font-extrabold text-gray-800 mt-4 md:mt-0">
                        💸 Total Spent: ₹{data.reduce((sum, item) => sum + parseInt(item.amount), 0)}
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CategoryCard label="Food" color="purple" emoji="🍔" amount={food} />
                    <CategoryCard label="Travel" color="blue" emoji="✈️" amount={travel} />
                    <CategoryCard label="Bills" color="yellow" emoji="💡" amount={bills} />
                    <CategoryCard label="Others" color="red" emoji="📦" amount={others} />
                </div>
            </section>

            {/* Chart */}
            <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">📊 Expense Category Wise</h3>
                    {/* <button
                        onClick={() => setChartType(chartType === "bar" ? "pie" : "bar")}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                        Switch to {chartType === "bar" ? "Pie" : "Bar"} Chart
                    </button> */}
                </div>
                 <BarChart chartData={chartData} />
            </section>

            {/* Filters & Entries */}
            <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">🧾 Recent Entries</h3>
                    <div className="flex space-x-4 items-center">

                        {/* Sort Toggle */}
                        <button
                            onClick={() => setSortByRecent(!sortByRecent)}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
                        >
                            {sortByRecent ? "Sort: Recent" : "Sort: Highest"}
                        </button>

                        {/* Filter Panel */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">Filter</label>
                            <div tabIndex={0} className="dropdown-content z-[50] p-6 w-72 rounded-xl bg-white shadow-lg">
                                <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="w-full mb-4 p-2 border rounded">
                                    <option value="data">All</option>
                                    <option value="food">Food</option>
                                    <option value="travel">Travel</option>
                                    <option value="bills">Bills</option>
                                    <option value="others">Others</option>
                                </select>
                                <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="w-full mb-4 p-2 border rounded" />
                                <input type="range" min={0} max={2000} step={100} value={rangeAmount} onChange={(e) => setRangeAmount(e.target.value)} className="w-full mb-2" />
                                <div className="flex justify-between text-xs text-gray-500 px-1">
                                    <span>0</span><span>1k</span><span>2k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Entries List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-auto">
                    {displayedData.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg shadow-md p-4">
                            <EntryRow label="Detail" value={item.detail} />
                            <EntryRow label="Amount" value={`₹${item.amount}`} />
                            <EntryRow label="Category" value={item.category} />
                            <EntryRow label="Note" value={item.note} />
                            <EntryRow label="Date" value={item.date} />
                            {/* <button
                                onClick={() => handleDelete(item.id)}
                                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                            >
                                ❌ Delete
                            </button> */}
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                            >
                                ❌ Delete
                            </button>

                        </div>
                    ))}
                </div>
            </section>

            {/* Modal for Add Entry */}
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" onSubmit={handleSubmit} className="modal-box bg-white rounded-xl shadow-xl p-6 space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">➕ Add New Entry</h4>
                    <input type="text" placeholder="Detail (e.g., Groceries)" required className="w-full p-3 border rounded-lg" value={formData.detail} onChange={e => setFormData({ ...formData, detail: e.target.value })} />
                    <input type="number" placeholder="Amount (₹)" required className="w-full p-3 border rounded-lg" value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} />
                    <select required className="w-full p-3 border rounded-lg" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                        <option value="">Select Category</option>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="bills">Bills</option>
                        <option value="others">Others</option>
                    </select>
                    <input type="date" required className="w-full p-3 border rounded-lg" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                    <input type="text" placeholder="Note" required className="w-full p-3 border rounded-lg" value={formData.note} onChange={e => setFormData({ ...formData, note: e.target.value })} />
                    <div className="flex justify-between mt-4">
                        <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg mr-2">Create</button>
                        <button type="button" onClick={() => document.getElementById("my_modal_1").close()} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

// Category Card
const CategoryCard = ({ label, color, emoji, amount }) => (
    <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
        <h2 className={`text-lg font-semibold text-${color}-800`}>{emoji} {label}</h2>
        <p className="text-xl font-bold text-gray-900">
            ₹{amount.reduce((sum, item) => sum + parseInt(item.amount), 0)}
        </p>
    </div>
);

// Entry Row
const EntryRow = ({ label, value }) => (
    <div className="flex justify-between">
        <span className="font-medium text-gray-700">{label}:</span>
        <span className="font-bold text-gray-900">{value}</span>
    </div>
);

export default Home;

