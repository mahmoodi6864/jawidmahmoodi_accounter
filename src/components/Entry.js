import React from "react";

const Entry = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-10">به برنامه خوش آمدید</h1>
      <div className="space-x-4">
        <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg">
          ورود
        </button>
        <button className="bg-white text-purple-600 hover:bg-purple-100 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg">
          ثبت‌نام
        </button>
      </div>
    </div>
  );
};

export default Entry;
