import axios from "axios"
import * as yup from "yup" 
import { useFormik } from "formik"
import { useState } from "react"
import toast from "react-hot-toast"
export default function Contact() {
  let [load, setload] = useState(false)
  let validationSchema = yup.object().shape({
    email : yup.string().email("Email is invaild").required("Email is required"),
    phone : yup.string().required("Phone is required").matches(/^01[0-2,5][0-9]{8}$/,"Phone is invaild"),
    name : yup.string().matches(/^[A-Za-z\s]+$/,"Name is inavid").required("Name is required")
  })
   async function submitForm(values) {
    setload(true)
    try {
      let api =  await axios.post(`http://upskilling-egypt.com:3000/contact`,values)
      setload(false)
      toast.success("Data submitted successfully!",{
        duration : 2000
      })
    } 
    catch(error){
    setload(false)
    toast.error(error.message , {
      duration : 2000 
    })
    }
  }
  let formik = useFormik({
    initialValues : {
      email : "" ,
      phone : "" ,
      name : ""
    }, 
    validationSchema ,
    onSubmit : submitForm
  })
  return<>

   <div className="flex items-center justify-center my-20">
      <div className="flex flex-col gap-10 items-center">
        <div className=" w-1 h-10 bg-fColor rotate-45 mb-2"></div>
        <div className=" w-1 h-10 bg-fColor -rotate-45"></div>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-fColor">Contact Us</h2>
      <div className="flex flex-col items-center gap-10 ">
        <div className=" w-1 h-10 bg-fColor -rotate-45 mb-2"></div>
        <div className=" w-1 h-10 bg-fColor rotate-45"></div>
      </div>
    </div>
    <div className="container w-3/4 flex flex-col xl:flex-row mx-auto my-5 gap-5 justify-center items-center">
        <div className="left w-full  md:w-3/4 xl:w-1/2 ">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 items-center" >
            <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="email" placeholder="email" className=" w-full xl:w-3/4 bg-fiColor rounded-full ps-5 py-3 placeholder:text-black focus:outline-none" />
              {formik.errors.email && formik.touched.email ? <p className="bg-red-500 py-3 rounded-full w-full xl:w-3/4 text-white  ">{formik.errors.email}</p> : ""}
            <input name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="tel" placeholder="phone" className="w-full xl:w-3/4 bg-fiColor rounded-full ps-5 py-3 placeholder:text-black focus:outline-none" />
              {formik.errors.phone && formik.touched.phone ? <p className="bg-red-500 py-3 rounded-full w-full xl:w-3/4 text-white  ">{formik.errors.phone}</p> : ""}
             <input name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="text" placeholder="Name" className="w-full xl:w-3/4 bg-fiColor rounded-full ps-5 py-3  placeholder:text-black focus:outline-none" />
              {formik.errors.name && formik.touched.name ? <p className="bg-red-500 py-3 rounded-full w-full xl:w-3/4 text-white  ">{formik.errors.name}</p> : ""}

            <button type="submit" className="px-10 py-2 border-2 border-blue-600 border-solid rounded-3xl ">
              {load ? "loading" : "send"}
            </button>
            </form>
        </div>
        <div className="right w-full md:w-1/2  flex flex-col gap-6 items-center xl:items-start">
          <div className="env flex gap-5 items-center">
          <i className="fa-solid fa-envelope text-sColor text-sm"></i>
          <p>upskilling.eg1@gmail.com</p>
          </div>
          <div className="phone flex gap-5 items-center">
            <i className="fa-solid fa-phone text-sColor text-sm"></i>
            <p>+20 115 493 2137</p>
          </div>
        </div>
    </div>
  
  </>
}
