"use client";

import React from 'react'
import Faq from 'react-faq-component';

const Question = () => {

  const data = {
  
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }

  return (
        <section className="py-20 bg-white">
    <div className="max-width">
        <div>
        <div className="font-rufina text-center ">
            <h2 className="text-center lg:text-5xl text-3xl font-bold pb-5">
             Frequently asked questions
            </h2>
            <p className="text-center pb-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            
          </div>

          <div className="flex max-md:flex-col lg:gap-5 justify-center mt-10  ">
          <Faq data={data} className=""/>

   <Faq data={data}/>
   </div>
        </div>
    </div>
    </section>
  )
}

export default Question