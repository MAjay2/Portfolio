import React, { useRef } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef()
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email('Sorry,invalid format here.').required('Required'),
    message: Yup.string()
  });

  const handleSubmit = (values,{resetForm}) => {
    // console.log(values);
    resetForm()

    emailjs.send("service_otkq4d8", "template_hix426g", values, "cM7CgmdBnwjUu_s0O").then(
      (result) => {
        alert("Message Sent Successfully");
      
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  };
  return (
    <div className=" lg:flex py-20 lg:justify-between bg-neutral-900  w-full bg-secondary-dark px-6 sm:px-10 lg:px-[165px]"
    id="form"
    >
      <div className="text-center lg:text-left  sm:mx-auto max-w-[445px] h-[208px]">
        <h1 className="font-bold text-white lg:text-[88px] sm:text-[72px] text-[40px]">
          Contact
        </h1>
        <p className="text-gray-400 ">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <Formik  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({errors,touched})=>(
        <Form  className="mx-auto  w-[200px] sm:min-w-[405px] flex flex-col">
        <Field
          placeholder="NAME"
          className={`border-b text-white outline-none py-2 ${touched.name && 'border-green-500' }  border-white bg-neutral-900`}
          type="text"
          name="name"
        />

        
        <Field
          placeholder="EMAIL"
          className={`py-2 text-white outline-none mt-5 bg-neutral-900 border-b ${errors.email && touched.email ? 'border-red-500' : touched.email ? 'border-primary-green' : null} border-white `}
          type="email"
          name="email"
          id="email"
        />
       {errors.email && touched.email ? <div className="text-red-500 text-right pt-1">{errors.email}</div>: null}
        

        <label className="text-gray-400 mt-7" htmlFor="">
          MESSAGE
        </label>
        <Field
          className={` text-white ${touched.message && 'border-green-500' } h-[107px] outline-none bg-neutral-900 border-b`}
          name="message"
          id=""
          cols="30"
          rows="10"
        ></Field>

        <div className="flex  justify-end">
          <button
            className=" text-white mt-10 font-bold border-b-4 pb-1 block border-b-green-500 hover:text-green-500 tracking-wider"
            type="submit"
          >
            {" "}
            SEND MESSAGE{" "}
          </button>
        </div>
      </Form>
        )}

      </Formik>
    </div>
  );
}