import React from "react";
import { useState,useRef,useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  const [status,setStatus]=useState(false)
  const form = useRef();
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true
    });
  }, []);

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setStatus(null);
      if (
        !form.current.elements.name.value.trim() ||
        !form.current.elements.email.value.trim() ||
        !form.current.elements.message.value.trim()
      ) {
        setStatus("Plese enter all field");
        setLoading(false);
        return;
      }
      const res= await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // console.log("send",res);
      setStatus(true)
      setStatus("Message Sent ✅");
      form.current.reset();
    } catch (error) {
      // console.log(error);
      setStatus("Failed to Send ❌");
      setStatus(false)
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="w-full" data-aos="fade-up">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center my-10 px-10 md:p-0">
        <h1 className="md:text-4xl text-2xl text-black border-3 py-1 px-12 w-fit text-center font-bold" data-aos="zoom-in">
          CONTACT
        </h1>
        <p className="max-w-3xl text-center my-10" data-aos="fade-up">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <div className="my-10" data-aos="fade-up">
          <img src="/separatorBlack2.png" alt="" />
        </div>
        <div data-aos="zoom-in">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6 mt-5">
            {/* <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            />

            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER"

              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            /> */}
            {[
              { 
                type: "text", 
                name: "name", 
                placeholder: "ENTER YOUR NAME*",
                delay: 100
              },
              { 
                type: "email", 
                name: "email", 
                placeholder: "ENTER YOUR EMAIL*",
                delay: 200
              },
              { 
                type: "tel", 
                name: "phoneNumber", 
                placeholder: "PHONE NUMBER",
                delay: 300
              }
            ].map((input) => (
              <input
                key={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                data-aos="fade-left"
                data-aos-delay={input.delay}
                className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide transition-all duration-300 focus:border-blue-500"
              />
            ))}

            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              data-aos="fade-left"
              data-aos-delay="400"
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 h-24 focus:outline-none uppercase text-sm tracking-wide resize-none"
            ></textarea>

            <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
            <button
                type="submit"
                className={`uppercase tracking-wide text-sm border-l-2 border-r-2 border-black px-8 py-3 transition-colors duration-300 ${
                  loading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "hover:bg-black hover:text-white"
                }`}
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : status ? status:"Submit"
                 }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
