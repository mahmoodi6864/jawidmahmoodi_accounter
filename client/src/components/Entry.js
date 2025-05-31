import React from "react";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-bold">به سیستم خوش آمدید</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          ورود
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          ثبت‌نام
        </button>
      </div>
    </div>
  );
};

export default Entry;
