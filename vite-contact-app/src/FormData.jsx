import { useState } from "react";

const initialValue = {
  id: 0,
  name: "",
  phone: "",
  email: "",
  address: "",
};
export default function FormData({ contact, setContact }) {
  const [formData, setFormData] = useState(initialValue);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      alert("not valid");
      return;
    }
    initialValue.id++;
    setContact((prev) => [...prev, formData]);
    setFormData(initialValue);
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-1/3 h-[420px] gap-2 shadow-lg p-4 rounded-lg"
    >
      <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">
        Add New Contact
      </h3>
      <label className="flex flex-col gap-2 text-neutral-500">
        Contact Name:
        <input
          type="text"
          name="name"
          placeholder="Your Name ..."
          className="border border-neutral-200 rounded-lg py-1 px-3 outline-pink-500"
          value={formData.name}
          onChange={changeHandler}
        ></input>
      </label>
      <label className="flex flex-col gap-2 text-neutral-500">
        Phone:
        <input
          type="text"
          name="phone"
          placeholder="Phone Number..."
          className="border border-neutral-200 rounded-lg py-1 px-3 outline-pink-500"
          value={formData.phone}
          onChange={changeHandler}
        ></input>
      </label>
      <label className="flex flex-col gap-2 text-neutral-500">
        Email:
        <input
          type="text"
          name="email"
          placeholder="Email..."
          className="border border-neutral-200 rounded-lg py-1 px-3 outline-pink-500"
          value={formData.email}
          onChange={changeHandler}
        ></input>
      </label>
      <label className="flex flex-col gap-2 text-neutral-500">
        Address:
        <input
          type="text"
          name="address"
          placeholder="Address..."
          className="border border-neutral-200 rounded-lg py-1 px-3 outline-pink-500"
          value={formData.address}
          onChange={changeHandler}
        ></input>
      </label>
      <button
        type="submit"
        className="w-full bg-pink-600 text-white font-bold py-2 rounded-lg mt-2"
      >
        Create
      </button>
    </form>
  );
}
