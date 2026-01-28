import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.password) newErrors.password = "Password required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password required";
    if(formData.password !== formData.confirmPassword){
      newErrors.confirmPassword ="confirm password must be same as password"
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="grid grid-cols-2 gap-4">

        <div>
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full ${
              errors.firstName && "border-red-500"
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full ${
              errors.lastName && "border-red-500"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="col-span-2">
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full ${
              errors.password && "border-red-500"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full ${
              errors.confirmPassword && "border-red-500"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <textarea
            name="about"
            placeholder="About Me"
            value={formData.about}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 outline-none resize-none"
          />
        </div>

        <div className="col-span-2">
          <Button
            type="submit"
            text="Sign up"
            textColor="text-white"
            bgColor="bg-[#2C49FE]"
            padding="px-25 sm:px-64 py-3"
            rounded="rounded-full"
            font="font-normal"
            textSize="text-lg"
             />
        </div>

      </div>
    </form>
  );
};

export default Form;

