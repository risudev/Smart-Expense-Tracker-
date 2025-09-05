// import React, { useContext, useEffect, useState } from "react";
// import { userContext } from "../Context/userContext";
// import BarChart from "../Components/BarChart";

// const Home = () => {
//     const {
//         data,
//         setData,
//         formData,
//         setFormData,
//         food,
//         bills,
//         travel,
//         others,
//         chartData,
//         handleChange,
//         handleDate,
//         showActive,
//         activeData,
//         value,
//         handleRange,
//     } = useContext(userContext);
//     const [status, setStatus] = useState(true);
//     useEffect(() => { }, [data]);
//     const handleSubmit = async (e) => {
//         document.getElementById("my_modal_1").close();
//         e.preventDefault();
//         data.push(formData);
//         localStorage.setItem("data", JSON.stringify(data));
//         setData(() => {
//             const storedData = localStorage.getItem("data");
//             return storedData ? JSON.parse(storedData) : [];
//         });
//         setFormData({
//             detail: "",
//             amount: "",
//             category: "",
//             date: "",
//             note: "",
//         });
//     };
//     const handleDelete = (key) => {
//         data.splice(key, 1);
//         localStorage.setItem("data", JSON.stringify(data));
//         setData(() => {
//             const storedData = localStorage.getItem("data");
//             return storedData ? JSON.parse(storedData) : [];
//         });
//     };

//     return (
//         <>
//             <div className=" md:h-screen bg-neutral-content grid md:grid-cols-2 gap-4 overflow-hidden ">
//                 {/* Open the modal using document.getElementById('ID').showModal() method */}
//                 <div>
//                     {/* <div className="w-full md:h-80 lg:h-60 p-4 m-2 grid border-0 shadow-lg bg-gray-100 justify-center mx-auto ">
//                         <button
//                             className="btn mt-2 w-auto bg-neutral text-neutral-content hover:bg-gray-400 hover:text-black rounded-md text-lg"
//                             onClick={() => document.getElementById("my_modal_1").showModal()}
//                         >
//                             Add new Entry
//                         </button>
//                         <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
//                             Total Spent Amount is :
//                             <span className="text-neutral ml-3">
//                                 {data.reduce((sum, item) => {
//                                     return sum + parseInt(`${item.amount}`);
//                                 }, 0)}
//                             </span>
//                         </h1>
//                         <div className="sm:grid lg:flex gap-4 justify-between">
//                             <h1 className="text-2xl font-bold text-red-500">
//                                 Food:
//                                 <span className="text-neutral ml-3">
//                                     {food.reduce((sum, item) => {
//                                         return sum + parseInt(`${item.amount}`);
//                                     }, 0)}
//                                 </span>
//                             </h1>
//                             <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
//                                 Travel:
//                                 <span className="text-neutral ml-3">
//                                     {travel.reduce((sum, item) => {
//                                         return sum + parseInt(`${item.amount}`);
//                                     }, 0)}
//                                 </span>
//                             </h1>
//                             <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
//                                 Bills:
//                                 <span className="text-neutral ml-3">
//                                     {bills.reduce((sum, item) => {
//                                         return sum + parseInt(`${item.amount}`);
//                                     }, 0)}
//                                 </span>
//                             </h1>
//                             <h1 className="sm:text-xl md:text-2xl font-bold text-red-500">
//                                 Others:
//                                 <span className="text-neutral ml-3">
//                                     {others.reduce((sum, item) => {
//                                         return sum + parseInt(`${item.amount}`);
//                                     }, 0)}
//                                 </span>
//                             </h1>
//                         </div>
//                     </div> */}
//                     <div className="w-full md:h-80 lg:h-64 p-6 m-4 grid gap-4 border-0 rounded-xl shadow-xl bg-white transition-all duration-300">
//                         <button
//                             className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-purple-800 transition-all duration-300"
//                             onClick={() => document.getElementById("my_modal_1").showModal()}
//                         >
//                             ➕ Add New Entry
//                         </button>

//                         <h1 className="text-center text-2xl md:text-3xl font-extrabold text-gray-800">
//                             💸 Total Spent Amount:
//                             <span className="ml-2 text-black">
//                                 ₹{data.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
//                             </span>
//                         </h1>

//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//                             <div className="bg-purple-100 p-4 rounded-lg shadow-md">
//                                 <h2 className="text-lg font-semibold text-purple-800">🍔 Food</h2>
//                                 <p className="text-xl font-bold text-gray-900">
//                                     ₹{food.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
//                                 </p>
//                             </div>

//                             <div className="bg-blue-100 p-4 rounded-lg shadow-md">
//                                 <h2 className="text-lg font-semibold text-blue-800">✈️ Travel</h2>
//                                 <p className="text-xl font-bold text-gray-900">
//                                     ₹{travel.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
//                                 </p>
//                             </div>

//                             <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
//                                 <h2 className="text-lg font-semibold text-yellow-800">💡 Bills</h2>
//                                 <p className="text-xl font-bold text-gray-900">
//                                     ₹{bills.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
//                                 </p>
//                             </div>

//                             <div className="bg-red-100 p-4 rounded-lg shadow-md">
//                                 <h2 className="text-lg font-semibold text-red-800">📦 Others</h2>
//                                 <p className="text-xl font-bold text-gray-900">
//                                     ₹{others.reduce((sum, item) => sum + parseInt(`${item.amount}`), 0)}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="sm:w-full  md:w-5/6 bg-red-100 shadow-md rounded-lg p-4 mx-auto ">
//                         <BarChart chartData={chartData} />
//                     </div>
//                 </div>
//                 <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box p-0 bg-transparent shadow-none">
//                         <div className="modal-action justify-center">
//                             <form
//                                 method="dialog"
//                                 onSubmit={handleSubmit}
//                                 className="bg-gradient-to-br from-purple-200 via-pink-100 to-red-100
//                    shadow-2xl backdrop-blur-md rounded-2xl p-8 w-full max-w-xl
//                    border border-white/40 space-y-4 transition-all duration-300"
//                             >
//                                 <h2 className="text-2xl font-extrabold text-center text-gray-800 drop-shadow-md">
//                                     ➕ Add New Entry
//                                 </h2>

//                                 <input
//                                     type="text"
//                                     placeholder="Enter Entry Details"
//                                     value={formData.detail}
//                                     required
//                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-md
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//                                     onChange={(e) => setFormData({ ...formData, detail: e.target.value })}
//                                 />

//                                 <input
//                                     type="number"
//                                     placeholder="Enter the Amount"
//                                     value={formData.amount}
//                                     required
//                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-md
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//                                     onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//                                 />

//                                 <select
//                                     value={formData.category}
//                                     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                                     required
//                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-md
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//                                 >
//                                     <option value="">Select Category</option>
//                                     <option value="food">🍔 Food</option>
//                                     <option value="travel">✈️ Travel</option>
//                                     <option value="bills">💡 Bills</option>
//                                     <option value="others">📦 Others</option>
//                                 </select>

//                                 <input
//                                     type="date"
//                                     value={formData.date}
//                                     required
//                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-md
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//                                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                                 />

//                                 <input
//                                     type="text"
//                                     placeholder="Enter notes"
//                                     value={formData.note}
//                                     required
//                                     className="w-full p-3 border border-gray-300 rounded-lg shadow-md
//                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
//                                     onChange={(e) => setFormData({ ...formData, note: e.target.value })}
//                                 />

//                                 <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
//                                     <button
//                                         type="submit"
//                                         className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500
//                        text-white font-semibold py-3 rounded-lg shadow-lg
//                        hover:shadow-xl hover:brightness-110 transition-all duration-300"
//                                     >
//                                         ✅ Create
//                                     </button>

//                                     <button
//                                         type="button"
//                                         onClick={() => document.getElementById("my_modal_1").close()}
//                                         className="flex-1 bg-gradient-to-r from-gray-500 to-red-500
//                        text-white font-semibold py-3 rounded-lg shadow-lg
//                        hover:shadow-xl hover:brightness-110 transition-all duration-300"
//                                     >
//                                         ❌ Close
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </dialog>

//                 <div className="md:h-3/4 border-0 m-4 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-xl shadow-2xl p-6 transition-all duration-300">
//                     <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center py-2 px-4 rounded-lg shadow-md mb-6">
//                         🧾 Recent Entries
//                     </h1>

//                     <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
//                         <button
//                             onClick={() => setStatus(!status)}
//                             className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl hover:brightness-110 transition-all duration-300"
//                         >
//                             {status ? "Recent" : "Highest"}
//                             <svg
//                                 className="w-5 h-5"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
//                                 />
//                             </svg>
//                         </button>

//                         {/* Dropdown Filter */}
//                         {/* <div className="dropdown dropdown-end">
//                             <label tabIndex={0} className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:brightness-110 shadow-md">
//                                 Filter
//                             </label>
//                             <div
//                                 tabIndex={0}
//                                 className="dropdown-content z-[1] p-4 bg-white/70 backdrop-blur-lg shadow-xl rounded-lg w-60"
//                             >
//                                 <select
//                                     value={value}
//                                     onChange={handleChange}
//                                     className="w-full p-2 mb-4 border rounded shadow-md focus:ring-2 focus:ring-purple-500"
//                                 >
//                                     <option value="data">All</option>
//                                     <option value="food">Food</option>
//                                     <option value="travel">Travel</option>
//                                     <option value="bills">Bills</option>
//                                     <option value="others">Others</option>
//                                 </select>

//                                 <input
//                                     type="date"
//                                     className="w-full mb-4 p-2 border rounded shadow-md cursor-pointer focus:ring-2 focus:ring-purple-500"
//                                     onChange={handleDate}
//                                 />

//                                 <input
//                                     type="range"
//                                     min={0}
//                                     max="2000"
//                                     value={value}
//                                     step="500"
//                                     onChange={handleRange}
//                                     className="range range-error"
//                                 />
//                                 <div className="flex justify-between px-2.5 mt-2 text-xs font-semibold">
//                                     <span>0</span>
//                                     <span>500</span>
//                                     <span>1k</span>
//                                     <span>1.5k</span>
//                                     <span>2k</span>
//                                 </div>
//                             </div>
//                         </div> */}

                        // <div className="dropdown dropdown-end">
                        //     {/* Filter Button */}
                        //     <label
                        //         tabIndex={0}
                        //         className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:brightness-110 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300"
                        //     >
                        //         Filter
                        //     </label>

                        //     {/* Dropdown Panel */}
                        //     <div
                        //         tabIndex={0}
                        //         className="dropdown-content z-[50] mt-2 p-8 w-72 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-300"
                        //     >
                        //         {/* Category Selector */}
                        //         <select
                        //             value={value}
                        //             onChange={handleChange}
                        //             className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        //         >
                        //             <option value="data">All</option>
                        //             <option value="food">Food</option>
                        //             <option value="travel">Travel</option>
                        //             <option value="bills">Bills</option>
                        //             <option value="others">Others</option>
                        //         </select>

                        //         {/* Date Picker */}
                        //         <input
                        //             type="date"
                        //             onChange={handleDate}
                        //             className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none"
                        //         />

                        //         {/* Range Slider */}
                        //         <input
                        //             type="range"
                        //             min={0}
                        //             max="2000"
                        //             step="500"
                        //             value={value}
                        //             onChange={handleRange}
                        //             className="range range-error mb-2"
                        //         />

                        //         {/* Slider Labels */}
                        //         <div className="flex justify-between text-xs text-gray-700 font-semibold px-2">
                        //             <span>0</span>
                        //             <span>500</span>
                        //             <span>1k</span>
                        //             <span>1.5k</span>
                        //             <span>2k</span>
                        //         </div>
                        //     </div>
                        // </div>


                        
                        
//                     </div>

//                     {/* Entry Cards */}
//                     <div className="grid md:grid-cols-2 gap-6 p-2 md:h-3/4 overflow-y-auto">
//                         {(status ? (showActive ? activeData : data) : (showActive ? activeData : data).toSorted((a, b) => b.amount - a.amount))
//                             .map((item, index) => (
//                                 <div
//                                     key={index}
//                                     className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
//                                 >
//                                     <h2 className="text-lg font-semibold text-gray-700">
//                                         📄 Detail: <span className="text-gray-900 font-bold">{item.detail}</span>
//                                     </h2>
//                                     <h2 className="text-gray-700">
//                                         💰 Amount: <span className="text-gray-900 font-bold">₹{item.amount}</span>
//                                     </h2>
//                                     <h2 className="text-gray-700">
//                                         🏷️ Category: <span className="text-gray-900 font-bold">{item.category}</span>
//                                     </h2>
//                                     <h2 className="text-gray-700">
//                                         📝 Note: <span className="text-gray-900 font-bold">{item.note}</span>
//                                     </h2>
//                                     <h2 className="text-gray-700">
//                                         📅 Date: <span className="text-gray-900 font-bold">{item.date}</span>
//                                     </h2>
//                                     <button
//                                         type="button"
//                                         className="mt-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
//                                         onClick={() => handleDelete(index)}
//                                     >
//                                         ❌ Delete
//                                     </button>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>

//             </div>

//             <div></div>
//         </>
//     );
// };

// export default Home;

// import React, { useContext, useEffect, useState } from "react";
// import { userContext } from "../Context/userContext";
// import BarChart from "../Components/BarChart";

// const Home = () => {
//     const {
//         data,
//         setData,
//         formData,
//         setFormData,
//         food,
//         bills,
//         travel,
//         others,
//         chartData,
//         handleChange,
//         handleDate,
//         showActive,
//         activeData,
//         value,
//         handleRange,
//     } = useContext(userContext);

//     const [status, setStatus] = useState(true);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         document.getElementById("my_modal_1").close();
//         data.push(formData);
//         localStorage.setItem("data", JSON.stringify(data));
//         setData(JSON.parse(localStorage.getItem("data") || "[]"));
//         setFormData({ detail: "", amount: "", category: "", date: "", note: "" });
//     };

//     const handleDelete = (key) => {
//         data.splice(key, 1);
//         localStorage.setItem("data", JSON.stringify(data));
//         setData(JSON.parse(localStorage.getItem("data") || "[]"));
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-4">
//             {/* Header */}
//             <header className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 p-4 rounded-lg text-white shadow-lg mb-6">
//                 <h1 className="text-3xl font-extrabold">
//                     Expense Tracker
//                 </h1>
//                 <span className="mt-2 md:mt-0 italic">
//                     Spend Smart Today, Smile Tomorrow
//                 </span>
//             </header>

//             {/* Summary Section */}
//             <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
//                 <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//                     <button
//                         onClick={() => document.getElementById("my_modal_1").showModal()}
//                         className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition"
//                     >
//                         ➕ Add New Entry
//                     </button>
//                     <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-4 md:mt-0">
//                         💸 Total Spent:{" "}
//                         <span className="text-gray-900">
//                             ₹{data.reduce((sum, item) => sum + parseInt(item.amount), 0)}
//                         </span>
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <CategoryCard label="Food" color="purple" emoji="🍔" amount={food} />
//                     <CategoryCard label="Travel" color="blue" emoji="✈️" amount={travel} />
//                     <CategoryCard label="Bills" color="yellow" emoji="💡" amount={bills} />
//                     <CategoryCard label="Others" color="red" emoji="📦" amount={others} />
//                 </div>
//             </section>

//             {/* Chart Section */}
//             <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
//                 <BarChart chartData={chartData} />
//             </section>

//             {/* Recent Entries Section */}
//             <section className="bg-white rounded-xl shadow-lg p-6 mb-6">
//                 <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-2xl font-bold text-gray-800">
//                         🧾 Recent Entries
//                     </h3>
//                     <button
//                         onClick={() => setStatus(!status)}
//                         className="flex items-center space-x-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
//                     >
//                         <span>{status ? "Recent" : "Highest"}</span>
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3" />
//                         </svg>
//                     </button>

//                     <div className="dropdown dropdown-end">
//                         {/* Filter Button */}
//                         <label
//                             tabIndex={0}
//                             className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:brightness-110 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300"
//                         >
//                             Filter
//                         </label>

//                         {/* Dropdown Panel */}
//                         <div
//                             tabIndex={0}
//                             className="dropdown-content z-[50] mt-2 p-8 w-72 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-300"
//                         >
//                             {/* Category Selector */}
//                             <select
//                                 value={value}
//                                 onChange={handleChange}
//                                 className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                             >
//                                 <option value="data">All</option>
//                                 <option value="food">Food</option>
//                                 <option value="travel">Travel</option>
//                                 <option value="bills">Bills</option>
//                                 <option value="others">Others</option>
//                             </select>

//                             {/* Date Picker */}
//                             <input
//                                 type="date"
//                                 onChange={handleDate}
//                                 className="w-full p-3 mb-4 border border-white/30 rounded-lg shadow-md bg-white/60 backdrop-blur-md cursor-pointer focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                             />

//                             {/* Range Slider */}
//                             <input
//                                 type="range"
//                                 min={0}
//                                 max="2000"
//                                 step="500"
//                                 value={value}
//                                 onChange={handleRange}
//                                 className="range range-error mb-2"
//                             />

//                             {/* Slider Labels */}
//                             <div className="flex justify-between text-xs text-gray-700 font-semibold px-2">
//                                 <span>0</span>
//                                 <span>500</span>
//                                 <span>1k</span>
//                                 <span>1.5k</span>
//                                 <span>2k</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-auto">
//                     {(status ? (showActive ? activeData : data) : (showActive ? activeData : data).slice().sort((a, b) => b.amount - a.amount))
//                         .map((item, index) => (
//                             <div key={index} className="bg-gray-50 rounded-lg shadow-md p-4 transition hover:shadow-lg">
//                                 <EntryRow label="Detail" value={item.detail} />
//                                 <EntryRow label="Amount" value={`₹${item.amount}`} />
//                                 <EntryRow label="Category" value={item.category} />
//                                 <EntryRow label="Note" value={item.note} />
//                                 <EntryRow label="Date" value={item.date} />
//                                 <button
//                                     onClick={() => handleDelete(index)}
//                                     className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
//                                 >
//                                     ❌ Delete
//                                 </button>
//                             </div>
//                         ))}
//                 </div>
//             </section>

//             {/* Modal for Add Entry */}
//             <dialog id="my_modal_1" className="modal">
//                 <form method="dialog" onSubmit={handleSubmit} className="modal-box bg-white rounded-xl shadow-xl p-6 space-y-4">
//                     <h4 className="text-xl font-bold text-gray-800">➕ Add New Entry</h4>
//                     <input type="text" placeholder="Detail (e.g., Groceries)" required
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-indigo-500"
//                         value={formData.detail} onChange={e => setFormData({ ...formData, detail: e.target.value })} />
//                     <input type="number" placeholder="Amount (₹)" required
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-indigo-500"
//                         value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })} />
//                     <select required
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-indigo-500"
//                         value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
//                         <option value="">Select Category</option>
//                         <option value="food">Food</option>
//                         <option value="travel">Travel</option>
//                         <option value="bills">Bills</option>
//                         <option value="others">Others</option>
//                     </select>
//                     <input type="date" required
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-indigo-500"
//                         value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
//                     <input type="text" placeholder="Note" required
//                         className="w-full p-3 border rounded-lg focus:outline-none focus:ring-indigo-500"
//                         value={formData.note} onChange={e => setFormData({ ...formData, note: e.target.value })} />
//                     <div className="flex justify-between space-x-4 mt-4">
//                         <button type="submit" className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">Create</button>
//                         <button type="button" onClick={() => document.getElementById("my_modal_1").close()} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg">Close</button>
//                     </div>
//                 </form>
//             </dialog>
//         </div>
//     );
// };

// const CategoryCard = ({ label, color, emoji, amount }) => (
//     <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
//         <h2 className={`text-lg font-semibold text-${color}-800`}>{emoji} {label}</h2>
//         <p className="text-xl font-bold text-gray-900">
//             ₹{amount.reduce((sum, item) => sum + parseInt(item.amount), 0)}
//         </p>
//     </div>
// );

// const EntryRow = ({ label, value }) => (
//     <div className="flex justify-between">
//         <span className="font-medium text-gray-700">{label}:</span>
//         <span className="font-bold text-gray-900">{value}</span>
//     </div>
// );


// export default Home;

import React, { useContext, useState } from "react";
import { userContext } from "../Context/userContext";
import BarChart from "../Components/BarChart";
//import PieChart from "../Components/PieChart";

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
    const [chartType, setChartType] = useState("bar");

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
                {chartType === "bar" ? <BarChart chartData={chartData} /> : <PieChart chartData={chartData} />}
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
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="mt-4 w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md"
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

