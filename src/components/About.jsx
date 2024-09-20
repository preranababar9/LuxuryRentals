import React from 'react'
import Image from "next/image";

const About = () => {
  return (
        <section className="py-20 bg-white">
    <div className="max-width">
        
    <h2 className="lg:text-5xl text-center text-3xl font-rufina  uppercase pb-8">
            About Us
          </h2>
        <div className="flex max-md:flex-col-reverse items-center  gap-x-20 gap-y-10 ">
       
        <div className="font-rufina lg:w-1/2  ">
          
          <p className="pb-3  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            eos voluptatem itaque molestiae. Fugit exercitationem molestiae
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, reprehenderit similique sunt voluptate 
            
          </p>

          <p className="pb-3  ">doloremque ut possimus illum soluta et atque ea officia voluptatum vero cumque laudantium eius quos. Pariatur, illo.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque voluptatem officia ut rerum, soluta culpa quasi consequuntur, beatae corporis dicta inventore molestias nesciunt eum architecto distinctio dignissimos est. Possimus!</p>

          <p>illo.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque voluptatem officia ut rerum, soluta culpa quasi consequuntur, beatae corporis dicta inventore molestias nesciunt eum architecto distinctio dignissimos est. Possimus!</p>
        </div>


        <div className="h-full lg:w-1/2">
        <Image
              src="/images/aboutus.svg"
              alt="Hero image"
              className="w-3/4 h-1/2 max-md:w-full  object-cover"
              width={10}
              height={10}
            />
        </div>
        </div>
        </div>
    </section>
  )
}

export default About