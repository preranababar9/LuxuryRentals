import React from 'react'
import Image from "next/image";

const Info = () => {
  return (
        <section className=" pb-24 pt-36">
    <div className="max-width">
        
     
    <div className="flex max-md:flex-col items-center gap-x-16 gap-y-10 ">


       <div className="h-full lg:w-1/2 max-md:w-3/4">
       <img
             src="/images/about2.svg"
             alt="Hero image"
             className="w-full h-1/2 max-md:w-full lg:w-full  object-cover"
            
           />
       </div>



         
       <div className="font-rufina lg:w-1/2  ">

       <h2 className="lg:text-5xl  text-3xl max-md:text-center  font-rufina  pb-8">
            Your peace of mind, our priority
          </h2>
         
         <p className="pb-3  ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
           eos voluptatem itaque molestiae. Fugit exercitationem molestiae
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit similique sunt voluptate 
           
         </p>

         <p className="pb-3  ">doloremque ut possimus illum soluta et atque ea officia voluptatum vero cumque laudantium eius quos. Pariatur, illo.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque voluptatem officia ut rerum, soluta culpa quasi consequuntur, beatae corporis dicta inventore molestias nesciunt eum architecto distinctio dignissimos est. Possimus!</p>

       </div>


       </div>

        </div>
    </section>
  )
}

export default Info