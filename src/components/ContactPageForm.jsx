import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const currentTime = new Date();
const displayTime = currentTime.toLocaleTimeString();

const formSchema = z.object({
  first_name: z.string().min(2, "First name must be at least 2 characters"),
  last_name: z.string(),
  email: z.string().email("Please enter a valid email address"),
  phone_number: z.string().min(10, "Phone number must be at least 10 digits"),
  remark: z.string().min(2, "Message must be at least 2 characters"),
});

export const BASE_URL = "https://crm2.actifyzone.com/crm-uat";

const ContactPageForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      remark: "",
    },
  });
  async function onSubmit(values) {
    const data = {
      ...values,
      time: displayTime,
      accountname: "Actify Learning",
      remark: {
        ...(typeof values.remark === "string"
          ? { msg: values.remark }
          : { msg: values.remark?.join("") || "" }),

        enquiry_type: selectedOption,

        ...(softwareSelected ? { software: softwareSelected } : {}),
        ...(courseSelected ? { course: courseSelected } : {}),
      },
    };

    try {
      const response = await axios.post(
        BASE_URL + "/Crm/Portal/User/websitecontacts",
        data
      );
      if (response.data.message == "Email Already Exist") {
        toast.error(response.data.message);
      } else {
        reset();
        toast.success("Form Submitted Successfully");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) throw error.response?.data;
      else throw "Something went wrong";
    }
  }

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [softwareSelected, setSoftwareSelected] = useState("");

  const handleSoftwareChange = (e) => {
    setSoftwareSelected(e.target.value);
    setCourseSelected("");
  };
  const [courseSelected, setCourseSelected] = useState("");

  const handleCourseChange = (e) => {
    setCourseSelected(e.target.value);
    setSoftwareSelected("");
  };

  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
      <Toaster />
      <div>
        <p className="text-center bg-[#e0eceb] w-6/12 mx-auto mb-5 text-[#1b7b68] font-bold text-[15px] py-1 rounded-md">
          Contact Us
        </p>
        <p className="text-black text-4xl sm:text-6xl md:text-6xl font-bold text-center mb-3">
          Let's Talk
        </p>
        <p className="text-black text-xl text-center">
          Fill below form, and we’ll give you a call.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-xl mt-8 w-full md:w-[50%] text-black grid grid-cols-2 gap-4"
      >
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="">Your Name</label>
          <input
            {...register("first_name", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2 "
            type="text"
            placeholder="Enter name"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="">Email Address</label>
          <input
            {...register("email", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="">Mobile Number</label>
          <input
            email
            {...register("phone_number", { required: true })}
            className="bg-white text-black border rounded-md border-gray-200 py-2 pl-2"
            type="number"
            placeholder="Enter phone number"
          />
        </div>
        <div className="flex flex-col col-span-2 sm:col-span-1">
          <label htmlFor="">Enquiry Type</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="business">Actify Business</option>
            <option value="learning">Actify Learning</option>
          </select>
        </div>
        {selectedOption == "business" && (
          <div className="flex flex-col col-span-2">
            <label htmlFor="">Software & Services</label>
            <select
              id="dropdown"
              value={softwareSelected}
              onChange={handleSoftwareChange}
              className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="CRM Portal">CRM Portal</option>
              <option value="HR Portal">HR Portal</option>
              <option value="Actify CMS">Actify CMS</option>
              <option value="Attendance">Attendance</option>
              <option value="Job Portal">Job Portal</option>
              <option value="Vendor Portal">Vendor Portal</option>
              <option value="Store App">Store App</option>
            </select>
          </div>
        )}
        {selectedOption == "learning" && (
          <div className="flex flex-col col-span-2">
            <label htmlFor="">Courses</label>
            <select
              id="dropdown"
              value={courseSelected}
              onChange={handleCourseChange}
              className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="RPA">RPA</option>
              <option value="Application Developer">
                Application Developer
              </option>
              <option value="Data Analyst">Data Analyst</option>
            </select>
          </div>
        )}
        <div className="flex flex-col col-span-2">
          <label htmlFor="">Your Message</label>
          <textarea
            {...register("remark", { required: true })}
            className="bg-white text-black border  rounded-md border-gray-200 py-2 pl-2 pb-16"
            type="text"
            placeholder="Ask about your requirement"
          />
        </div>
        <button className="py-2 sm:w-full md:w-5/12 bg-black rounded-md text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPageForm;
