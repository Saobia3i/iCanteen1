import React from "react";

const dummyOrders = [
  {
    id: 101,
    customer: "Alice",
    items: "Burger, Coke",
    total: 15.5,
    paid: true,
  },
  {
    id: 102,
    customer: "Bob",
    items: "Pizza, Juice",
    total: 22.0,
    paid: false,
  },
  {
    id: 103,
    customer: "Charlie",
    items: "Sandwich, Coffee",
    total: 10.0,
    paid: true,
  },
];

const StaffHome = () => {
  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-10">
      <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
        Staff Dashboard
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-orange-200">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Items</th>
              <th className="px-4 py-2">Total ($)</th>
              <th className="px-4 py-2">Paid</th>
            </tr>
          </thead>
          <tbody>
            {dummyOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-orange-50 transition"
              >
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.items}</td>
                <td className="px-4 py-2">{order.total.toFixed(2)}</td>
                <td
                  className={`px-4 py-2 font-semibold ${
                    order.paid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.paid ? "Paid" : "Unpaid"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-400"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order ID:</span>
              <span>{order.id}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Customer:</span>
              <span>{order.customer}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Items:</span>
              <span>{order.items}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Total:</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
            <div
              className={`flex justify-between font-semibold ${
                order.paid ? "text-green-600" : "text-red-600"
              }`}
            >
              <span>Status:</span>
              <span>{order.paid ? "Paid" : "Unpaid"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffHome;
