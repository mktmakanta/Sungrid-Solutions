import React from "react";

export default function HomeWhatsapp() {
  return (
    <div className="flex gap-2 flex-col fixed z-50 bottom-5 right-2 md:right-4">
      <a
        href="#Home"
        className="h-14 w-14 rounded-full bg-amber-500 shadow-md shadow-slate-300 flex place-content-center"
      >
        <img src="src/icons/homebtn.svg" alt="" />
      </a>

      <div className="h-14 w-14 rounded-full bg-green-600 shadow-md shadow-slate-300 flex place-content-center">
        <img src="src/icons/whatsapp.svg" alt="" />
      </div>
    </div>
  );
}
