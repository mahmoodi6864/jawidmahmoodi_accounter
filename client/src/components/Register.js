import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    province: '',
    address: '',
    phoneNumber1: '',
    phoneNumber2: '',
    companyName: '',
    companyEstablished: '',
    email: '',
    password: '',
    image: null,
    telegramUserId: '',
    termsAccepted: false,
    accountLocked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("لطفاً شرایط و قوانین را بپذیرید");
      return;
    }

    try {
      await axios.post('http://localhost:5000/users', formData);
      alert("ثبت‌نام با موفقیت انجام شد!");
    } catch (error) {
      console.error(error);
      alert("خطا در ثبت‌نام");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">فرم ثبت‌نام شرکت</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="firstName" placeholder="نام" onChange={handleChange} className="input" />
        <input name="lastName" placeholder="نام خانوادگی" onChange={handleChange} className="input" />
        <input name="fatherName" placeholder="نام پدر" onChange={handleChange} className="input" />
        <input name="dateOfBirth" type="date" placeholder="تاریخ تولد" onChange={handleChange} className="input" />
        <input name="gender" placeholder="جنسیت" onChange={handleChange} className="input" />
        <input name="province" placeholder="استان" onChange={handleChange} className="input" />
        <input name="address" placeholder="آدرس" onChange={handleChange} className="input" />
        <input name="phoneNumber1" placeholder="شماره تماس اول" onChange={handleChange} className="input" />
        <input name="phoneNumber2" placeholder="شماره تماس دوم" onChange={handleChange} className="input" />
        <input name="companyName" placeholder="نام شرکت" onChange={handleChange} className="input" />
        <input name="companyEstablished" type="date" placeholder="تاریخ تاسیس شرکت" onChange={handleChange} className="input" />
        <input name="email" type="email" placeholder="ایمیل" onChange={handleChange} className="input" />
        <input name="password" type="password" placeholder="رمز عبور" onChange={handleChange} className="input" />
        <input name="telegramUserId" placeholder="شناسه تلگرام" onChange={handleChange} className="input" />
        <input name="image" type="file" onChange={handleChange} className="input" />
      </div>

      <label className="flex items-center space-x-2">
        <input type="checkbox" name="termsAccepted" onChange={handleChange} />
        <span>شرایط و قوانین را می‌پذیرم</span>
      </label>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">ثبت‌نام</button>
    </form>
  );
};

export default Register;
