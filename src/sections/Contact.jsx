// export default function Contact({ contact, theme, darkMode }) {
//   return (
//     <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
//       <div className="grid gap-6 lg:grid-cols-2">
//         <div className={`rounded-[32px] border p-8 md:p-10 ${darkMode ? "border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10" : "border-slate-200 bg-gradient-to-r from-blue-100 to-purple-100"}`}>
//           <h2 className="text-3xl font-bold">Contact</h2>
//           <p className="mt-3 max-w-2xl text-slate-300">
//             Open to MERN Stack Developer, Junior Full Stack Developer, Linux Administrator, and DevOps Engineer opportunities.
//           </p>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2">
//             <a href={contact.github} target="_blank" rel="noreferrer" className={`rounded-2xl border p-4 ${darkMode ? "border-white/10 bg-slate-950/50 hover:bg-slate-900" : "border-slate-200 bg-white hover:bg-slate-50"}`}>
//               <p className={`text-sm ${theme.muted}`}>GitHub</p>
//               <p className="mt-1 font-medium">praveenkumar-834</p>
//             </a>

//             <a href={contact.linkedin} target="_blank" rel="noreferrer" className={`rounded-2xl border p-4 ${darkMode ? "border-white/10 bg-slate-950/50 hover:bg-slate-900" : "border-slate-200 bg-white hover:bg-slate-50"}`}>
//               <p className={`text-sm ${theme.muted}`}>LinkedIn</p>
//               <p className="mt-1 font-medium">Praveen Kumar Ramamoorthy</p>
//             </a>

//             <div className={`rounded-2xl border p-4 ${darkMode ? "border-white/10 bg-slate-950/50" : "border-slate-200 bg-white"}`}>
//               <p className={`text-sm ${theme.muted}`}>Location</p>
//               <p className="mt-1 font-medium">{contact.location}</p>
//             </div>

//            <a href={`mailto:${contact.email}`}className={`rounded-2xl border p-4 break-words overflow-hidden ${darkMode ? "border-white/10 bg-slate-950/50": "border-slate-200 bg-white"}`}>
//               <p className={`text-sm ${theme.muted}`}>Email</p>
//               <p className="mt-1 font-medium">{contact.email}</p>
//             </a>
//           </div>
//         </div>

//         <div className={`rounded-[32px] border p-8 md:p-10 ${theme.card}`}>
//           <h2 className="text-3xl font-bold">Quick Message</h2>
//           <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
//             <input type="text" placeholder="Your name" className={`rounded-2xl border px-4 py-3 outline-none ${darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"}`} />
//             <input type="email" placeholder="Your email" className={`rounded-2xl border px-4 py-3 outline-none ${darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"}`} />
//             <textarea rows="5" placeholder="Your message" className={`rounded-2xl border px-4 py-3 outline-none ${darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"}`} />
//             <button className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white">Send Message</button>
//             <p className={`text-sm ${theme.muted}`}>
              
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact({ contact, theme, darkMode }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      setMsg("Message sent successfully ✅");
      formRef.current.reset();
    } catch (err) {
      setMsg("Failed to send ❌");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <div className="grid gap-6 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className={`rounded-[32px] border p-8 md:p-10 ${
          darkMode
            ? "border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
            : "border-slate-200 bg-gradient-to-r from-blue-100 to-purple-100"
        }`}>
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Open to MERN Stack Developer, Junior Full Stack Developer,
            Linux Administrator, and DevOps Engineer opportunities.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={contact.github} target="_blank" rel="noreferrer"
              className={`rounded-2xl border p-4 ${
                darkMode
                  ? "border-white/10 bg-slate-950/50 hover:bg-slate-900"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}>
              <p className={`text-sm ${theme.muted}`}>GitHub</p>
              <p className="mt-1 font-medium">praveenkumar-834</p>
            </a>

            <a href={contact.linkedin} target="_blank" rel="noreferrer"
              className={`rounded-2xl border p-4 ${
                darkMode
                  ? "border-white/10 bg-slate-950/50 hover:bg-slate-900"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}>
              <p className={`text-sm ${theme.muted}`}>LinkedIn</p>
              <p className="mt-1 font-medium">Praveen Kumar Ramamoorthy</p>
            </a>

            <div className={`rounded-2xl border p-4 ${
              darkMode
                ? "border-white/10 bg-slate-950/50"
                : "border-slate-200 bg-white"
            }`}>
              <p className={`text-sm ${theme.muted}`}>Location</p>
              <p className="mt-1 font-medium">{contact.location}</p>
            </div>

            <a href={`mailto:${contact.email}`}
              className={`rounded-2xl border p-4 break-words ${
                darkMode
                  ? "border-white/10 bg-slate-950/50"
                  : "border-slate-200 bg-white"
              }`}>
              <p className={`text-sm ${theme.muted}`}>Email</p>
              <p className="mt-1 font-medium break-all">{contact.email}</p>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={`rounded-[32px] border p-8 md:p-10 ${theme.card}`}>
          <h2 className="text-3xl font-bold">Quick Message</h2>

          {/* 🔥 IMPORTANT CHANGE */}
          <form ref={formRef} onSubmit={sendEmail} className="mt-6 grid gap-4">

            <input
              type="text"
              name="name"   // ✅ IMPORTANT
              placeholder="Your name"
              required
              className={`rounded-2xl border px-4 py-3 outline-none ${
                darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"
              }`}
            />

            <input
              type="email"
              name="email"  // ✅ IMPORTANT
              placeholder="Your email"
              required
              className={`rounded-2xl border px-4 py-3 outline-none ${
                darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"
              }`}
            />

            <textarea
              name="message" // ✅ IMPORTANT
              rows="5"
              placeholder="Your message"
              required
              className={`rounded-2xl border px-4 py-3 outline-none ${
                darkMode ? "border-white/10 bg-slate-900/70" : "border-slate-200 bg-slate-50"
              }`}
            />

            <button
              disabled={loading}
              className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* ✅ SUCCESS / ERROR MESSAGE */}
            {msg && (
              <p className="text-sm mt-2 text-green-400">{msg}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}