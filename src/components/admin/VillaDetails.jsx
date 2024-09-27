"use client";
import React, { useState } from "react";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { addVilla } from "../../../services/allvillas";
import { v4 } from "uuid";
import { addFile } from "../../../utils/file";

const Villaplace = () => {
  const [data, setData] = useState({
    name: "",
    checkinDate: "",
    checkoutDate: "",
    checkinTime: "",
    checkoutTime: "",
    country: "",
    region: "",
    images: [],
    price: 0,
    guests: 0,
    bedroom: 0,
    area: 0,
    bathroom: 0,
    totalDays: 0, // To calculate total days of stay
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setData({ ...data, images: files });
  };

  // Calculate total days between check-in and check-out
  const calculateTotalDays = (checkinDate, checkoutDate) => {
    const checkInDate = new Date(checkinDate);
    const checkOutDate = new Date(checkoutDate);

    if (checkOutDate > checkInDate) {
      const diffInTime = checkOutDate - checkInDate;
      const diffInDays = diffInTime / (1000 * 3600 * 24);
      return diffInDays;
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = await addFile(data.imageUrl, `villaImg/${v4()}`, v4());
      setData({ ...data, images: url });

      const totalDays = calculateTotalDays(data.checkinDate, data.checkoutDate);
      if (totalDays <= 0) {
        toast.error("Check-out date must be after check-in date.");
        return;
      }
      console.log("hellooooooooooo");
      // Submit logic for handling the form data
      const formData = {
        name: data.name,
        checkinDate: data.checkinDate,
        checkoutDate: data.checkoutDate,
        checkinTime: data.checkinTime,
        checkoutTime: data.checkoutTime,
        country: data.country,
        region: data.region,
        images: url,
        price: data.price,
        guests: data.guests,
        bedroom: data.bedroom,
        area: data.area,
        bathroom: data.bathroom,
        id: v4(),
        totalDays,
      };

      await addVilla(formData);
      console.log(formData);

      toast.success("Villa place information added successfully!");

      // Clear form after submission
      setData({
        name: "",
        checkinDate: "",
        checkoutDate: "",
        checkinTime: "",
        checkoutTime: "",
        country: "",
        region: "",
        images: [],
        price: 0,
        guests: 0,
        bedroom: 0,
        area: 0,
        bathroom: 0,
        totalDays: 0,
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="py-3">
      <div className="">
        <div className="">
          <form
            onSubmit={handleSubmit}
            className=" h-[600px] lg:flex max-md:flex-col items-center flex-wrap gap-2 overflow-hidden"
          >
            {/* Name */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter name"
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>

            {/* Country */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter country"
                type="text"
                value={data.country}
                onChange={(e) => setData({ ...data, country: e.target.value })}
                required
              />
            </div>

            {/* Region */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Region
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter region"
                type="text"
                value={data.region}
                onChange={(e) => setData({ ...data, region: e.target.value })}
                required
              />
            </div>

            {/* Price */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter price"
                type="number"
                value={data.price}
                onChange={(e) =>
                  setData({ ...data, price: parseInt(e.target.value, 10) })
                }
                required
              />
            </div>

            {/* Area */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Area (sqm)
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter area in square meters"
                type="number"
                value={data.area}
                onChange={(e) =>
                  setData({ ...data, area: parseFloat(e.target.value) })
                }
                required
              />
            </div>

            {/* Guests */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Guests
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter number of guests"
                type="number"
                value={data.guests}
                onChange={(e) =>
                  setData({ ...data, guests: parseInt(e.target.value, 10) })
                }
                required
              />
            </div>

            {/* Bedrooms */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bedrooms
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter number of bedrooms"
                type="number"
                value={data.bedroom}
                onChange={(e) =>
                  setData({ ...data, bedroom: parseInt(e.target.value, 10) })
                }
                required
              />
            </div>

            {/* Bathrooms */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bathrooms
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                placeholder="Enter number of bathrooms"
                type="number"
                value={data.bathroom}
                onChange={(e) =>
                  setData({ ...data, bathroom: parseInt(e.target.value, 10) })
                }
                required
              />
            </div>

            {/* Check-in Date */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Check-in Date
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                type="date"
                value={data.checkinDate}
                onChange={(e) =>
                  setData({ ...data, checkinDate: e.target.value })
                }
                required
              />
            </div>

            {/* Check-in Time */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Check-in Time
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                type="time"
                value={data.checkinTime}
                onChange={(e) =>
                  setData({ ...data, checkinTime: e.target.value })
                }
                required
              />
            </div>

            {/* Check-out Date */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Check-out Date
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                type="date"
                value={data.checkoutDate}
                onChange={(e) =>
                  setData({ ...data, checkoutDate: e.target.value })
                }
                required
              />
            </div>

            {/* Check-out Time */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Check-out Time
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                type="time"
                value={data.checkoutTime}
                onChange={(e) =>
                  setData({ ...data, checkoutTime: e.target.value })
                }
                required
              />
            </div>

            {/* Images */}
            <div className="w-full max-w-xs p-3 bg-white rounded-lg">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Image
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                type="file"
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            {/* Total Days */}
            {data.checkinDate && data.checkoutDate && (
              <div className="w-full max-w-xs p-3 bg-white rounded-lg">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Total Days:{" "}
                  {calculateTotalDays(data.checkinDate, data.checkoutDate)}
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black rounded-lg text-white  px-6 h-12"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Villaplace;
