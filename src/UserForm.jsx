import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty && !isSaved) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, isSaved]);


  const onSubmit = (data) => {
    const userWithId = { id: nanoid(), ...data };
    localStorage.setItem("userData", JSON.stringify(userWithId));
    setIsSaved(true);
    reset();
    alert("User data saved!");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 p-6 bg-white rounded-lg shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address:
          </label>
          <input
            {...register("address", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone:
          </label>
          <input
            {...register("phone", { required: true })}
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UserForm;
