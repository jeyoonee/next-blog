"use client";

import { useState } from "react";
import * as yup from "yup";
import { ValidationError } from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다")
    .required("이메일은 필수입니다"),
  subject: yup.string().required("제목은 필수입니다"),
  message: yup
    .string()
    .min(10, "메시지는 최소 10자 이상 입력해주세요")
    .required("메시지를 입력해주세요"),
});

export default function SendEmailForm() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // 입력 중 에러 메시지 초기화
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      await schema.validate(form, { abortEarly: false });
      setErrors({ email: "", subject: "", message: "" });
      setStatus("loading");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        const newErrors = { email: "", subject: "", message: "" };
        err.inner.forEach((validationErr) => {
          const path = validationErr.path as "email" | "subject" | "message";
          newErrors[path] = validationErr.message;
        });
        setErrors(newErrors);
      } else {
        setStatus("error");
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-700 flex flex-col w-1/3 mx-auto p-5 space-y-2 mb-3 rounded-xl"
    >
      <label className="text-white font-semibold">Your Email</label>
      <input
        className="focus:outline-none p-2 bg-white"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p className="text-red-400">{errors.email}</p>}

      <label className="text-white font-semibold">Subject</label>
      <input
        className="focus:outline-none p-2 bg-white"
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />
      {errors.subject && <p className="text-red-400">{errors.subject}</p>}

      <label className="text-white font-semibold">Message</label>
      <textarea
        className="focus:outline-none p-2 bg-white text-black"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />
      {errors.message && <p className="text-red-400">{errors.message}</p>}

      <button className="mt-3 bg-yellow-300 font-semibold p-2">Submit</button>

      {status === "loading" && <p className="text-white">Sending...</p>}
      {status === "success" && <p className="text-green-400">Email sent!</p>}
      {status === "error" && (
        <p className="text-red-400">Something went wrong.</p>
      )}
    </form>
  );
}
