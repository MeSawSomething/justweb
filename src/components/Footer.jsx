import React from "react";

export default function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Miso
      </a>
      <a
        href="mailto:mshongsmile@gmail.com"
        className=" text-sm md:text-md hover:text-indigo-500"
      >
        mshongsmile@gmail.com
      </a>
      <p className="text-xs mt-2 text-gray-500">
        @Miso {new Date().getFullYear()}
      </p>
    </div>
  );
}
