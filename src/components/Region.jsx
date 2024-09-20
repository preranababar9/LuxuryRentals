import React from 'react'
import Image from "next/image";

const Region = () => {
  return (
        <section className="py-20 bg-lightbrown">
                 <div className="max-width">
                      <div>
                      <div className="font-rufina text-center ">
          <h2 className="text-center lg:text-5xl text-3xl uppercase pb-5">
            Our Regions
          </h2>
          <p className="text-center pb-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos voluptatem itaque molestiae. Fugit exercitationem molestiae
            
          </p>
        </div>


        <div className="flex gap-10 max-md:gap-5 max-md:flex-col">
        <Image
                src="/images/region1.svg"
                alt="Hero image"
                className="w-full "
                width={10}
                height={10}
              />


<Image
                src="/images/region2.svg"
                alt="Hero image"
                className="w-full "
                width={10}
                height={10}
              />
        </div>
                      </div>
                        </div>
        </section>
   
  )
}

export default Region