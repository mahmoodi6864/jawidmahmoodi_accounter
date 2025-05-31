import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
      if (res.data.length > 0) {
        alert("ورود موفقیت‌آمیز بود");
        console.log(res.data[0]);
      } else {
        alert("ایمیل یا رمز عبور اشتباه است");
      }
    } catch (error) {
      console.error(error);
      alert("خطا در ورود");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4">ورود</h2>
      <input type="email" placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} className="input" />
      <input type="password" placeholder="رمز عبور" onChange={(e) => setPassword(e.target.value)} className="input" />
      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700">ورود</button>
    </form>
  );
};

export default Login;
