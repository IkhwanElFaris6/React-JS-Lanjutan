 {/* Regist form*/} 

import React, { useState } from 'react';
import './form.css';

const RegisterForm = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullname.trim()) newErrors.fullname = 'Nama lengkap wajib diisi';
    if (!form.email.includes('@')) newErrors.email = 'Format email tidak valid';
    if (!form.username.trim()) newErrors.username = 'Username wajib diisi';
    if (form.password.length < 6) newErrors.password = 'Password minimal 6 karakter';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Registrasi berhasil!');
      console.log('Data pengguna:', form);
      // bisa lanjut ke backend atau redirect
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrasi Pengguna</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Nama Lengkap</label>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Daftar</button>
      </form>
    </div>
  );
};

export default RegisterForm;

 {/* stly css */} 
.form-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.3rem;
  font-weight: 600;
}

.form-group input {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

 {/* app jsx */} 
import React from 'react';
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default App;
