import img1 from "../..//assets/img1.jpg"
export default function Roundrock() {
  return <>
  <div className=" xl:w-3/4 mx-auto my-5 flex flex-col md:flex-row items-center md:relative">
    <div>
       <img src = {img1} alt="Trush" className=" w-full rounded-br-2xl clip-md"
    />
    </div>
    <div className=" md:absolute w-full md:w-3/4 md:right-0 ">
      <div className="up text-fColor my-5">
        <h1 className="text-4xl sm:text-6xl flex flex-col font-light">Round Rock <span className="font-extrabold text-xl" style={{ letterSpacing: '8px' }}>Truch Hauling</span></h1>
      </div>
      <div className="px-5 py-1 bg-fColor mx-auto rounded-2xl w-fit text-white xl:mt-20 ">Experts</div>
      <div className=" w-full md:w-3/4 down xl:w-1/2 mx-auto text-tColor my-5">
        <p className="font-thin text-3xl sm:text-5xl">Lorem
        <span className="font-bold block">Lorem lorem</span>
        </p>
        <p className="text-sm font-semibold w-3/4 my-5 mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <div className="px-16 py-4 bg-sColor rounded-full mx-auto text-xl font-bold text-white w-fit">Help Me</div>
      </div>
    </div>
  </div>
  </>
}
