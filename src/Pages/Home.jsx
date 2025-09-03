import React, { useContext, useEffect, useState } from "react";
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
        handleChange,
        handleDate,
        showActive,
        activeData,
        value,
        handleRange,
    } = useContext(userContext);
    const [status, setStatus] = useState(true);
    useEffect(() => { }, [data]);
    const handleSubmit = async (e) => {
        document.getElementById("my_modal_1").close();
        e.preventDefault();
        data.push(formData);
        localStorage.setItem("data", JSON.stringify(data));
        setData(() => {
            const storedData = localStorage.getItem("data");
            return storedData ? JSON.parse(storedData) : [];
        });
        setFormData({
            detail: "",
            amount: "",
            category: "",
            date: "",
            note: "",
        });
    };
    const handleDelete = (key) => {
        data.splice(key, 1);
        localStorage.setItem("data", JSON.stringify(data));
        setData(() => {
            const storedData = localStorage.getItem("data");
            return storedData ? JSON.parse(storedData) : [];
        });
    };

    return (
        <>
            <div className=" md:h-screen bg-neutral-content grid md:grid-cols-2 gap-4 overflow-hidden ">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div>
                    {/* <div className="w-full md:h-80 lg:h-60 p-4 m-2 grid border-0 shadow-lg bg-gray-100 justify-center mx-auto ">
                        <button
                            className="btn mt-2 w-auto bg-neutral text-neutral-content hover:bg-gray-400 hover:text-black rounded-md text-lg"
                            onClick={() => document.getElementById("my_modal_1").showModal()}
                        >
                            Add new Entry
                        </button>
                        <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
                            Total Spent Amount is :
                            <span className="text-neutral ml-3">
                                {data.reduce((sum, item) => {
                                    return sum + parseInt(`${item.amount}`);
                                }, 0)}
                            </span>
                        </h1>
                        <div className="sm:grid lg:flex gap-4 justify-between">
                            <h1 className="text-2xl font-bold text-red-500">
                                Food:
                                <span className="text-neutral ml-3">
                                    {food.reduce((sum, item) => {
                                        return sum + parseInt(`${item.amount}`);
                                    }, 0)}
                                </span>
                            </h1>
                            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
                                Travel:
                                <span className="text-neutral ml-3">
                                    {travel.reduce((sum, item) => {
                                        return sum + parseInt(`${item.amount}`);
                                    }, 0)}
                                </span>
                            </h1>
                            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
                                Bills:
                                <span className="text-neutral ml-3">
                                    {bills.reduce((sum, item) => {
                                        return sum + parseInt(`${item.amount}`);
                                    }, 0)}
                                </span>
                            </h1>
                            <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
                                Others:
                                <span className="text-neutral ml-3">
                                    {others.reduce((sum, item) => {
                                        return sum + parseInt(`${item.amount}`);
                                    }, 0)}
                                </span>
                            </h1>
                        </div>
                    </div> */}
                    <div className="w-full md:h-80 lg:h-60 p-6 m-4 grid border-0 rounded-xl shadow-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 backdrop-blur-md justify-center mx-auto transition-all duration-300">
                        <button
                            className="btn mt-2 mb-4 w-fit px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg shadow-gray-700/50 hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-lg text-lg"
                            onClick={() => document.getElementById("my_modal_1").showModal()}
                        >
                            ➕ Add New Entry
                        </button>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-red-600 drop-shadow-md text-center mb-4">
                            💸 Total Spent Amount:
                            <span className="ml-3 text-gray-800 font-bold">
                                ₹{data.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
                            </span>
                        </h1>

                        <div className="grid sm:grid-cols-2 lg:flex gap-6 justify-between text-center">
                            <div className="bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <h2 className="text-xl font-semibold text-red-500">🍔 Food</h2>
                                <p className="text-lg font-bold text-gray-800">
                                    ₹{food.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
                                </p>
                            </div>

                            <div className="bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <h2 className="text-xl font-semibold text-red-500">✈️ Travel</h2>
                                <p className="text-lg font-bold text-gray-800">
                                    ₹{travel.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
                                </p>
                            </div>

                            <div className="bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <h2 className="text-xl font-semibold text-red-500">💡 Bills</h2>
                                <p className="text-lg font-bold text-gray-800">
                                    ₹{bills.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
                                </p>
                            </div>

                            <div className="bg-white bg-opacity-70 backdrop-blur-lg p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                                <h2 className="text-xl font-semibold text-red-500">📦 Others</h2>
                                <p className="text-lg font-bold text-gray-800">
                                    ₹{others.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-full  md:w-5/6 bg-red-100 shadow-md rounded-lg p-4 mx-auto ">
                        <BarChart chartData={chartData} />
                    </div>
                </div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box p-0 bg-transparent shadow-none">
                        <div className="modal-action justify-center">
                            <form
                                method="dialog"
                                onSubmit={handleSubmit}
                                className="bg-gradient-to-br from-purple-200 via-pink-100 to-red-100 
                   shadow-2xl backdrop-blur-md rounded-2xl p-8 w-full max-w-xl 
                   border border-white/40 space-y-4 transition-all duration-300"
                            >
                                <h2 className="text-2xl font-extrabold text-center text-gray-800 drop-shadow-md">
                                    ➕ Add New Entry
                                </h2>

                                <input
                                    type="text"
                                    placeholder="Enter Entry Details"
                                    value={formData.detail}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
                                />

                                <input
                                    type="number"
                                    placeholder="Enter the Amount"
                                    value={formData.amount}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                />

                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                >
                                    <option value="">Select Category</option>
                                    <option value="food">🍔 Food</option>
                                    <option value="travel">✈️ Travel</option>
                                    <option value="bills">💡 Bills</option>
                                    <option value="others">📦 Others</option>
                                </select>

                                <input
                                    type="date"
                                    value={formData.date}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />

                                <input
                                    type="text"
                                    placeholder="Enter notes"
                                    value={formData.note}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                />

                                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 
                       text-white font-semibold py-3 rounded-lg shadow-lg 
                       hover:shadow-xl hover:brightness-110 transition-all duration-300"
                                    >
                                        ✅ Create
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => document.getElementById("my_modal_1").close()}
                                        className="flex-1 bg-gradient-to-r from-gray-500 to-red-500 
                       text-white font-semibold py-3 rounded-lg shadow-lg 
                       hover:shadow-xl hover:brightness-110 transition-all duration-300"
                                    >
                                        ❌ Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>

                <div className="md:h-3/4 border-0 m-4 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-xl shadow-2xl p-6 transition-all duration-300">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center py-2 px-4 rounded-lg shadow-md mb-6">
                        🧾 Recent Entries
                    </h1>

                    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
                        <button
                            onClick={() => setStatus(!status)}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300"
                        >
                            {status ? "Recent" : "Highest"}
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Filter */}
                        {/* <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:brightness-110 shadow-md">
                                Filter
                            </label>
                            <div
                                tabIndex={0}
                                className="dropdown-content z-[1] p-4 bg-white/70 backdrop-blur-lg shadow-xl rounded-lg w-60"
                            >
                                <select
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full p-2 mb-4 border rounded shadow-md focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="data">All</option>
                                    <option value="food">Food</option>
                                    <option value="travel">Travel</option>
                                    <option value="bills">Bills</option>
                                    <option value="others">Others</option>
                                </select>

                                <input
                                    type="date"
                                    className="w-full mb-4 p-2 border rounded shadow-md cursor-pointer focus:ring-2 focus:ring-purple-500"
                                    onChange={handleDate}
                                />

                                <input
                                    type="range"
                                    min={0}
                                    max="2000"
                                    value={value}
                                    step="500"
                                    onChange={handleRange}
                                    className="range range-error"
                                />
                                <div className="flex justify-between px-2.5 mt-2 text-xs font-semibold">
                                    <span>0</span>
                                    <span>500</span>
                                    <span>1k</span>
                                    <span>1.5k</span>
                                    <span>2k</span>
                                </div>
                            </div>
                        </div> */}

                        <div className="dropdown dropdown-end">
                            {/* Filter Button */}
                            <label
                                tabIndex={0}
                                className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:brightness-110 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300"
                            >
                                Filter
                            </label>

                            {/* Dropdown Panel */}
                            <div
                                tabIndex={0}
                                className="dropdown-content z-[50] mt-2 p-8 w-72 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-300"
                            >
                                {/* Category Selector */}
                                <select
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                >
                                    <option value="data">All</option>
                                    <option value="food">Food</option>
                                    <option value="travel">Travel</option>
                                    <option value="bills">Bills</option>
                                    <option value="others">Others</option>
                                </select>

                                {/* Date Picker */}
                                <input
                                    type="date"
                                    onChange={handleDate}
                                    className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                />

                                {/* Range Slider */}
                                <input
                                    type="range"
                                    min={0}
                                    max="2000"
                                    step="500"
                                    value={value}
                                    onChange={handleRange}
                                    className="range range-error mb-2"
                                />

                                {/* Slider Labels */}
                                <div className="flex justify-between text-xs text-gray-700 font-semibold px-2">
                                    <span>0</span>
                                    <span>500</span>
                                    <span>1k</span>
                                    <span>1.5k</span>
                                    <span>2k</span>
                                </div>
                            </div>
                        </div>


                        
                        
                    </div>

                    {/* Entry Cards */}
                    <div className="grid md:grid-cols-2 gap-6 p-2 md:h-3/4 overflow-y-auto">
                        {(status ? (showActive ? activeData : data) : (showActive ? activeData : data).toSorted((a, b) => b.amount - a.amount))
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                >
                                    <h2 className="text-lg font-semibold text-gray-700">
                                        📄 Detail: <span className="text-gray-900 font-bold">{item.detail}</span>
                                    </h2>
                                    <h2 className="text-gray-700">
                                        💰 Amount: <span className="text-gray-900 font-bold">₹{item.amount}</span>
                                    </h2>
                                    <h2 className="text-gray-700">
                                        🏷️ Category: <span className="text-gray-900 font-bold">{item.category}</span>
                                    </h2>
                                    <h2 className="text-gray-700">
                                        📝 Note: <span className="text-gray-900 font-bold">{item.note}</span>
                                    </h2>
                                    <h2 className="text-gray-700">
                                        📅 Date: <span className="text-gray-900 font-bold">{item.date}</span>
                                    </h2>
                                    <button
                                        type="button"
                                        className="mt-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                                        onClick={() => handleDelete(index)}
                                    >
                                        ❌ Delete
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

            </div>

            <div></div>
        </>
    );
};

export default Home;