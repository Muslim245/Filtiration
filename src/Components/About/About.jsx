
import img6 from "../../assets/img6.png"
import img7 from "../../assets/img7.jpg"
export default function About() {
  return <>
  <div className="bg-no-repeat bg-contain relative w-full py-5 lg:h-[500px] flex  md:flex-row gap-2 flex-col items-center " style={{ backgroundImage: `url(${img7})`  }}>
  <div className="absolute inset-0 bg-fColor opacity-50 z-0"></div>
  <div className=" text-white md:w-1/2 lg:absolute z-10 top-10 md:text-left left-1/4 ">
    <h3 className="font-black text-4xl ">About Us</h3>
    <p className="text-xs my-5 w-full lg:w-1/2 font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when </p>
    <div className="img w-1/2 mx-auto lg:mx-0 lg:w-1/3 rounded-xl overflow-hidden ">
        <img src={img6} alt="" />
    </div>
  </div>
  <div className="layer hidden lg:block lg:absolute bg-fColor z-20 inset-0"
   style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 30% 100%)' }}
   >
  </div>
  <div className="md:py-16 pb-10 pt-5 md:w-1/2 lg:w-full text-white lg:absolute z-30 flex flex-col items-center md:items-end top-5 right-44 ">
            <h3 className="font-black text-4xl " >Where</h3>
            <p className="text-xs my-5 w-3/4 lg:w-1/4 font-bold  md:text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recetly with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
  </div>
  <div className="px-10 py-4 bg-[#EEC04B] rounded-full my-5 absolute bottom-0 left-1/2 z-40 -translate-x-1/2">Help me</div>  
  </div>
  </>
}
