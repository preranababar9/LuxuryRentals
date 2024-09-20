import React from 'react'
import Image from "next/image";

const Speciality = () => {
  return (
        <section className="py-20  bg-gray-200">
    <div className="max-width my-20">
    <div className="font-rufina text-center mb-14 ">
          <h2 className="text-center lg:text-5xl text-3xl  pb-5">
            Our Properties Specialities
          </h2>
          </div>


          <div className="flex justify-evenly gap-10 max-md:flex-col items-center ">
                <div className="flex flex-col items-start  font-rufina">
                <Image
                src="/icons/s1.svg"
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

       
              <h4 className="text-3xl pt-8">Seafront</h4>
              <p className="text-xl pt-3 ">have a look</p>
              

                </div>
            



                <div className="flex flex-col items-start font-rufina">
                <Image
                src="/icons/s2.svg"
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

              <h4 className="text-3xl pt-8">Pet friendly</h4>
              <p className="text-xl pt-3">pets allowed</p>
                </div>



                <div className="flex flex-col items-start font-rufina">
                <Image
                src="/icons/s3.svg"
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

              <h4 className="text-3xl pt-8">Electric car</h4>
              <p className="text-xl pt-3">charge your car</p>
                </div>


                

                <div className="flex flex-col items-start font-rufina">
                <Image
                src="/icons/s4.svg"
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

              <h4 className="text-3xl pt-8">Fitness/Gym</h4>
              <p className="text-xl pt-3">workout</p>
                </div>


                

                <div className="flex flex-col items-start font-rufina">
                <Image
                src="/icons/s5.svg"
                alt="Hero image"
                className="w-10 h-10 "
                width={10}
                height={10}
              />

              <h4 className="text-3xl pt-8">Boot moorning</h4>
              <p className="text-xl pt-3">take a strip</p>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Speciality