import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import './Signup.css';

function PaymentForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (You can process the form data here)
    console.log(data);
    // Redirect or perform any other action after form submission
    navigate("/Confirmation"); // Change "/Confirmation" to the desired URL
  };

  return (
    <div>
        <div><Nav/></div>
    <div className="mx-auto bg-white text-black max-w-md p-4 border-4 rounded-xl mt-40">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Payment Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="form-group w-full">
          {/* Phone/UPI Field */}
         
          <div className="form-field">
            <label className="form-label">Phonepay/Gpay/Paytm</label>
            <input
              type="text"
              className="input max-w-full"
              placeholder="Enter UPI Number"
              {...register("upiNumber", { required: true })}
            />
            {errors.upiNumber && (
              <div className="error-dropdown text-red-500">UPI Number is required</div>
            )}
          </div>
          <div className="flex items-center justify-center ">
            <hr className="border-gray-300 w-full" />
            <div className="mx-4 text-gray-500">or</div>
            <hr className="border-gray-300 w-full" />
          </div>
          {/* Bank Details Field */}
          <div className="form-field ">
        <h2 className="font-semibold">Bank Details</h2>
      </div>
          <div className="form-field">
            <label className="form-label">Account Number</label>
            <input
              type="text"
              className="input max-w-full"
              placeholder="Enter Account Number"
              {...register("accountNumber", { required: true })}
            />
            {errors.accountNumber && (
              <div className="error-dropdown text-red-500">Account Number is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Confirm Account Number</label>
            <input
              type="text"
              className="input max-w-full"
              placeholder="Confirm Account Number"
              {...register("confirmAccountNumber", { required: true })}
            />
            {errors.confirmAccountNumber && (
              <div className="error-dropdown text-red-500">Confirm Account Number is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">IFSC Code</label>
            <input
              type="text"
              className="input max-w-full"
              placeholder="Enter IFSC Code"
              {...register("ifscCode", { required: true })}
            />
            {errors.ifscCode && (
              <div className="error-dropdown text-red-500">IFSC Code is required</div>
            )}
          </div>
          {/* Submit Button */}
          <div className="form-field pt-5">
            <button
              type="submit"
              className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default PaymentForm;