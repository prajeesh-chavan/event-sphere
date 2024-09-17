//Booking Verify Page

import { verifyBooking } from "../services/bookingService";
import { set } from "date-fns";
import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import verifyAnim from "../assets/verify.json";
import wrong from "../assets/wrong.json";

function BookingVerify() {
  const ticketId = useParams().id;
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const verify = async () => {
      try {
        const responce = await verifyBooking(ticketId);
        if (responce) {
          setVerify(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    verify();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        {verify ? (
          <>
            <div className="w-32">
              <Lottie animationData={verifyAnim} size={5} loop={false} />
            </div>
            <h1 className="text-4xl text-center">Booking Confirmed!</h1>
          </>
        ) : (
          <>
            <div className="w-32">
              <Lottie animationData={wrong} size={5} loop={false} />
            </div>
            <h1 className="text-4xl text-center">No Bookings!</h1>
          </>
        )}
      </div>
    </>
  );
}

export default BookingVerify;
