import React from 'react'

const Villaplace = () => {
  return (
        <section className="py-3 ">
        <div className="">
          <div className="">
            <form
        //       onSubmit={setCategory}
              className="flex items-center flex-wrap gap-5"
            >
              <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Country
                </label>
                <input
                  class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=" Enter Country"
                  type="text"
                //   value={data.title}
                //   onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
  
              <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Region
                </label>
                <input
                  class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder=" Enter Region"
                  type="text"
                //   value={data.tag}
                //   onChange={(e) => setData({ ...data, tag: e.target.value })}
                />
              </div>
  
              {/* <div class="w-full max-w-xs p-5 bg-white rounded-lg ">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Category Image
                </label>
                <input
                  class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                  placeholder="Category Image"
                //   type="file"
                //   // value={data.imageUrl}
                //   onChange={(e) =>
                //     setData({ ...data, imageUrl: e.target.files[0] })
                //   }
                 />
              </div> */}
  
              <button
                type="submit"
                className="bg-black rounded-lg text-white px-6 mt-3 py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Villaplace