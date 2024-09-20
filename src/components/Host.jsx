import React from 'react'
import Image from 'next/image';

const Host = () => {
  return (

    <div className="">
<div className="h-[100vh]">
<Image
                   src="/images/host.svg"
                   alt="Hero image"
                   className="object-cover w-full h-full "
                   width={1}
                   height={1}
      />
</div>
    </div>
  )
}

export default Host