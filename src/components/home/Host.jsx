import React from 'react'
import Image from 'next/image';

const Host = () => {
  return (

    <div className="">
<div className="h-[100vh] relative">
<Image
                   src="/images/host.svg"
                   alt="Hero image"
                   className="object-cover w-full h-full "
                   width={1}
                   height={1}
      />

<div className="absolute font-rufina max-xl:w-1/2 max-2xl:w-1/2 w-1/3 max-lg:w-1/2  max-md:w-2/3 max-sm:w-4/5 bg-white flex flex-col items-center py-10 rounded-lg px-3 top-[30%] max-xl:left-[25%] max-lg:left-[25%] max-md:left-[18%] max-sm:left-[10%] max-2xl:left-[23%]   left-[32%]   opacity-85 ">

        <p className="text-lg text-primary1">Join Us</p>
        <h3 className="lg:text-4xl text-3xl font-bold  pb-10">Become a host</h3>

        <p className="text-center lg:text-lg text-md pb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates cumque, ab enim amet beatae </p>

        <button className="lg:text-xl text-lg uppercase lg:px-10  px-8 py-3 rounded-lg bg-primary1 text-white">join today</button>
</div>

</div>
    </div>
  )
}

export default Host