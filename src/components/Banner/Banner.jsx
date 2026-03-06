import vactorImg1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="flex gap-16 justify-center  my-8">
      
      {/* //! Card 01 */}
      <div className="relative w-1/3 h-44 rounded-xl overflow-hidden bg-linear-to-br from-[#632EE3] to-[#9F62F2]">
        {/* First Image - full background */}
        <img
          src={vactorImg1}
          alt="V1"
          className="absolute inset-0 w-45 h-full object-cover"
        />

        {/* Second Image - mirrored horizontally and positioned on the right */}
        <img
          src={vactorImg1}
          alt="V1-mirrored"
          className="absolute top-0 right-0 w-45 h-full object-cover -scale-x-100"
        />

       

        {/* Content */}
        <div className="relative z-10 p-6 text-white text-center ">
          <div>
            <h3 className="text-xl font-semibold">In-Progress</h3>
          <p className="text-sm mt-2">
            Dynamic content
          </p>
          </div>
        </div>
      </div>

            {/* //! Card 02 */}
      <div className="relative w-1/3 h-44 rounded-xl overflow-hidden bg-linear-to-br from-[#54CF68] to-[#00827A]">
      
        <img
          src={vactorImg1}
          alt="V1"
          className="absolute inset-0 w-45 h-full object-cover"
        />       
        <img
          src={vactorImg1}
          alt="V1-mirrored"
          className="absolute top-0 right-0 w-45 h-full object-cover -scale-x-100"
        />      
        <div className=" p-6 text-white text-center">
          <h3 className="text-xl font-semibold">Resolved</h3>
          <p className="text-sm mt-2">
            Dynamic content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
