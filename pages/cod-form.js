import React, { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const CODForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfirmOrder = () => {
    const { name, email, phone, address } = formData;
    if (!name || !email || !phone || !address) {
      toast.error("Please fill all fields");
      return;
    }
    // ممكن هنا تضيف إرسال الطلب للسيرفر أو أي لوجيك ثاني
    toast.success("Order confirmed! Thank you for your purchase.");
    router.push("/success"); // نقل المستخدم لصفحة نجاح الطلب
  };

  return (
    <div className="form-container">
      <h2>Cash on Delivery Details</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Delivery Address"
        value={formData.address}
        onChange={handleChange}
      ></textarea>
      <button className="btn" onClick={handleConfirmOrder}>
        Confirm Order
      </button>

      <style jsx>{`
        .form-container {
          max-width: 480px;
          margin: 50px auto;
          padding: 30px;
          border-radius: 10px;
          background: #f9f9f9;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        h2 {
          margin-bottom: 20px;
          text-align: center;
          color: #333;
        }
        input,
        textarea {
          margin-bottom: 15px;
          padding: 12px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-family: inherit;
          resize: vertical;
        }
        textarea {
          min-height: 100px;
        }
    
      `}</style>
    </div>
  );
};

export default CODForm;
