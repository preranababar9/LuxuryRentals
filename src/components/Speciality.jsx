import React from 'react'
import Image from "next/image";

const Speciality = () => {
  return (
        <section className="py-20 bg-gray-200">
    <div className="max-width">
    <div className="font-rufina text-center ">
          <h2 className="text-center lg:text-5xl text-3xl  pb-5">
            Our Properties Specialities
          </h2>
          </div>


          <div>
                <div className="flex flex-col">
                <Image
                src="/icons/s1.svg"
                alt="Hero image"
                className="w-full h-10 "
                width={10}
                height={10}
              />

              <h4>Seafront</h4>
              <p>have a look</p>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Speciality