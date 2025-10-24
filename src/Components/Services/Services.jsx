import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.jpg"

export default function Services() {
  return <>
   <div className="flex items-center justify-center my-20">
      <div className="flex flex-col gap-10 items-center mr-4">
        <span className="block w-1 h-10 bg-fColor rotate-45 mb-2"></span>
        <span className="block w-1 h-10 bg-fColor -rotate-45"></span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-fColor">Services</h2>
      <div className="flex flex-col items-center gap-10 ml-4">
        <span className="block w-1 h-10 bg-fColor -rotate-45 mb-2"></span>
        <span className="block w-1 h-10 bg-fColor rotate-45"></span>
      </div>
    </div>
    <div className="container my-5 w-3/4 mx-auto flex flex-col xl:flex-row  gap-5">
    <div className="box xl:w-1/3 w-full rounded-3xl bg-white overflow-hidden my-5">
    <div className="up">
        <img src={img2} alt="" className="w-full" />
    </div>
    <div className="down ms-5 text-left p-5 text-foColor">
        <h4 className="font-black mb-2">Lorem Ipsum</h4>
        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled</p>
    </div>
    </div>


        <div className="box xl:w-1/3 w-full rounded-3xl bg-white overflow-hidden my-5">
    <div className="up">
        <img src={img3} alt="" className="w-full" />
    </div>
    <div className="down ms-5 text-left p-5 text-foColor">
        <h4 className="font-black mb-2 ">Lorem Ipsum</h4>
        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled</p>
    </div>
    </div>


        <div className="box xl:w-1/3 w-full rounded-3xl bg-white overflow-hidden my-5">
    <div className="up">
        <img src={img3} alt="" className="w-full" />
    </div>
    <div className="down ms-5 text-left p-5 text-foColor">
        <h4 className="font-black mb-2 ">Lorem Ipsum</h4>
        <p className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled</p>
    </div>
    </div>
  </div>
    <div className="px-16 py-4 bg-sColor rounded-full mx-auto text-xl font-bold text-white w-fit">Help Me</div>
  </>
}