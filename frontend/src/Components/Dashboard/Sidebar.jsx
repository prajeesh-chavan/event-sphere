import React from "react";

function Sidebar() {
  return (
    <div className="w-[250px] h-[1351px] px-4 pt-[25px] pb-4 left-0 top-[70px] absolute  justify-start items-start gap-2.5 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-14 px-[23px] py-4 bg-[#475be8] rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#fcfcfc] text-base font-bold font-['Manrope'] leading-snug">
              Dashboard
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[23px] py-4  rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#808191] text-base font-bold font-['Manrope'] leading-snug">
              Property
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[23px] py-4  rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#808191] text-base font-bold font-['Manrope'] leading-snug">
              Agent
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[23px] py-4  rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#808191] text-base font-bold font-['Manrope'] leading-snug">
              Review
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[23px] py-4  rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#808191] text-base font-bold font-['Manrope'] leading-snug">
              Message
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 px-[23px] py-4  rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="grow shrink basis-0 text-[#808191] text-base font-bold font-['Manrope'] leading-snug">
              My Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
