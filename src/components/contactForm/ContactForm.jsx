import React, { useState } from "react";
import "../contactForm/ContactForm.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from '../../Store/actions/apiActions'

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contactinfo, loading, error, formSubmissionResponse } = useSelector((state) => state.api);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    subject: "",
    phoneNumber: "",
    company: "",
    message: "",
  });
  const [formDataErr, setFormDataErr] = useState({
    nameErr: "",
    emailErr: "",
    mobileNumberErr: "",
    subjectErr: "",
    phoneNumberErr: "",
    companyErr: "",
    messageErr: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormDataErr((prevFormData) => ({ ...prevFormData, [name + "Err"]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mobregex = /^\d+$/;
  
    const newErrors = {};

    if (!formData.name) {
      newErrors.nameErr = "Enter your name";
    }
    if (!formData.email) {
      newErrors.emailErr = "Enter your email";
    } else if (!formData.email.match(regex)) {
      newErrors.emailErr = "Enter correct email";
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumberErr = "Enter your Mobile Number";
    } else if (formData.mobileNumber.length !== 10) { 
      newErrors.mobileNumberErr = "Enter Correct Mobile number";
    } else if (!mobregex.test(formData.mobileNumber)) { 
      newErrors.mobileNumberErr = "Enter Mobile number in digits only";
    }
    if (!formData.subject) {
      newErrors.subjectErr = "Enter your subject";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumberErr = "Enter your Phone Number";
    } else if (
      formData.phoneNumber.length > 10 ||
      formData.phoneNumber.length <= 9
    ) {
      newErrors.phoneNumberErr = "Enter Correct Phone number";
    } else if (!mobregex.test(formData.phoneNumber)) { 
      newErrors.phoneNumber = "Enter Mobile number in digits only";
    }
    if (!formData.company) {
      newErrors.companyErr = "Enter your company";
    }
    if (!formData.message) {
      newErrors.messageErr = "Enter your message";
    }
    if (Object.keys(newErrors).length > 0) {
      setFormDataErr(newErrors);
      return;
    }

    dispatch(submitContactForm(formData));

    setFormData({
      name: "",
      email: "",
      mobileNumber: "",
      subject: "",
      phoneNumber: "",
      company: "",
      message: "",
    });
  };
  return (
    <div className=" py-6 relative isolate bg-[#000c28] px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32 bg-[#000c28]">
          <div className="mx-auto py-14 max-w-xl lg:mx-0 lg:max-w-lg">
            <span className="block  mb-3 font-semibold text-xl text-yellow-500">
              DROP US A LINE
            </span>
            <h2 className="text-white w-3/4 leading-[40px] mt-9 dark:text-white mb-6 text-[20px] font-semibold  sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              Connect with Digiatto’s Expert
            </h2>
            <p className="text-base mt-9  text-white leading-[20px] text-[14px] w-3/4 mb-6">
              Ready to take the first step towards unlocking opportunities,
              realizing goals, and embracing innovation? We're here and eager to
              connect.
            </p>
            {contactinfo.map((item, index) => (
              <div key={index + 1}>
                <div className=" flex w-full ">
                  <div className="bg-primary/5 text-primary flex h-[60px] w-full max-w-[60px] items-center justify-start overflow-hidden rounded sm:h-[70px] sm:max-w-[55px] gap-1">
                    <div className="contact-left-small-deev"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-full  ">
                      <h4 className=" text-sm font-semitbold text-white dark:text-white flex justify-start items-center">
                        To More Inquiry
                      </h4>
                      <p className=" text-body-color dark:text-dark-6 flex justify-start items-center font-semibold text-yellow-500">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-8 flex w-full ">
                  <div className="bg-primary/5 text-primary flex h-[60px] w-full max-w-[60px] items-center justify-start overflow-hidden rounded sm:h-[70px] sm:max-w-[55px] gap-1">
                    <div className="contact-left-small-deev"></div>
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="w-full  ">
                      <h4 className=" text-sm font-semitbold text-white dark:text-white flex justify-start items-center">
                        To Send Mail
                      </h4>
                      <p className="text-base text-body-color dark:text-dark-6 flex justify-start items-center font-semibold text-yellow-500">
                        {item.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div className="mt-3">
                <h2 className="text-white text-sm">
                  Social Just You Connected Us!
                </h2>
                <ul className="flex mt-4 space-x-2">
                  <li className=" h-10 w-10 rounded-full bg-transparent border-2 border-[#013DC4] flex items-center justify-center shrink-0 hover:bg-yellow-300">
                    <a href="fdsf">
                      <SlSocialFacebook fill="#013DC4" />
                    </a>
                  </li>
                  <li className=" h-10 w-10  border-2 border-[#013DC4] rounded-full flex items-center justify-center shrink-0 hover:bg-yellow-300">
                    <a href="dsds">
                      <FaLinkedinIn fill="#013DC4" />
                    </a>
                  </li>
                  <li className=" h-10 w-10 rounded-full  border-2 border-[#013DC4] flex  items-center justify-center shrink-0 hover:bg-yellow-300">
                    <a href="dsds">
                      <FaInstagram fill="#013DC4" />
                    </a>
                  </li>
                  <li className=" h-10 w-10 rounded-full  border-2 border-[#013DC4] flex  items-center justify-center shrink-0 hover:bg-yellow-300">
                    <a href="dsds">
                      <FaXTwitter fill="#013DC4" />
                    </a>
                  </li>
                  <li className=" h-10 w-10 rounded-full  border-2 border-[#013DC4] flex  items-center justify-center shrink-0 hover:bg-yellow-300">
                    <a href="dsds">
                      <FaBehance fill="#013DC4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form w-full flex   justify-start items-center ">
          <div className="w-full bg-[#001033] px-9 py-12">
            <h2 className=" mt-3 mb-6 text-white text-lg font-bold">
              Your Success Starts Here!
            </h2>
            <div className="w-full mb-6  flex justify-start border-[#FCB61A] border"></div>
            <form
              className="flex  justify-start items-center"
              onSubmit={handleSubmit}
            >
              <div className=" w-full mx-auto max-w-xl lg:mr-0 ">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Digia...."
                      />
                      {formDataErr.nameErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.nameErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Email"
                      />
                      {formDataErr.emailErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.emailErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Mobile Number"
                      />
                      {formDataErr.mobileNumberErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.mobileNumberErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Your Subject"
                      />
                      {formDataErr.subjectErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.subjectErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Mobile Number"
                      />
                      {formDataErr.phoneNumberErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.phoneNumberErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInput}
                        className="block w-full rounded border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white bg-[transparent] focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Company / Organization"
                      />
                      {formDataErr.companyErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.companyErr}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="mt-2">
                      <textarea
                        rows="6"
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleInput}
                        className="block w-full rounded-md border-0 bg-[transparent] ring-[#013DC4] px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#013DC4] placeholder:text-white focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                        placeholder="Message"
                      ></textarea>
                      {formDataErr.messageErr ? (
                        <p className=" text-[red] text-sm leading-[15px] mt-[02px] mb-[0px]">
                          {formDataErr.messageErr}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex w-full justify-center items-center">
                 
                    <div className="lg:flex lg:flex-1 lg:justify-start w-full">
                      <button
                        className="bg-[#013bbe] text-white px-[12px] py-[13px] rounded-[5px] text-[1rem] font-semibold hover:bg-[#04287b]"
                        onClick={handleSubmit}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                     {formSubmissionResponse && (
                      <div className="sm:col-span-2">
                        <p className="text-green-500 text-xs mt-2">
                          {formSubmissionResponse.message || "Form submitted successfully!"}
                        </p>
                      </div>
                    )}
                    {error && (
                      <div className="sm:col-span-2">
                        <p className="text-red-500 text-xs mt-2">
                          {error || "There was an error submitting the form. Please try again."}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
