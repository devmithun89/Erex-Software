// MyForm.js
import React from "react";

export default function Inputfield() {
  return (
    <form className="p-6 bg-white rounded shadow-md">
      <label htmlFor="username" className="block mb-2 font-bold text-gray-700">
        Username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        placeholder="Enter your username"
      />
    </form>
  );
}
