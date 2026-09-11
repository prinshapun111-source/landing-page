import Header from "@/components/Header";

const sectionClass = "mt-9";

export default function PrivacyPolicy() {
  return <main className="page-shell min-h-screen bg-slate-50">
    <Header />
    <article className="mx-auto max-w-3xl px-5 pb-20 pt-14 sm:pt-20">
      <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-600">Smart Idea</p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-[-.055em] text-slate-950 sm:text-6xl">Privacy Policy</h1>
      <p className="mt-5 text-sm text-slate-500">Last updated: September 11, 2026</p>
      <p className="mt-8 text-lg leading-8 text-slate-600">This Privacy Policy explains how Smart Idea collects, uses, and protects information when you visit our website or request a Free AI Marketing Consultation.</p>

      <div className="mt-10 rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm sm:p-10">
        <section>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Information we collect</h2>
          <p className="mt-3 leading-7 text-slate-600">When you submit a consultation request, we may collect your name, email address, WhatsApp number, business name, website or Facebook link, and any message you choose to provide. We may also receive limited technical and usage information through cookies and similar technologies.</p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">How we use your information</h2>
          <p className="mt-3 leading-7 text-slate-600">We use this information to respond to your request, schedule or prepare for your consultation, provide relevant marketing information, improve our website, and protect our services from misuse.</p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Services and third parties</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600"><li><strong>Flodesk</strong> processes consultation-form submissions and may send related email communications.</li><li><strong>Meta Pixel</strong> helps us measure website visits and advertising performance.</li><li><strong>YouTube</strong> provides the video embedded on our thank-you page.</li><li><strong>WhatsApp</strong> is used when you choose to start a chat with us.</li></ul>
          <p className="mt-3 leading-7 text-slate-600">These providers may process information under their own privacy policies. We do not sell your personal information.</p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Cookies and advertising</h2>
          <p className="mt-3 leading-7 text-slate-600">We use the Meta Pixel to understand whether our marketing is effective and to measure actions taken on this website. Your browser or device settings may allow you to manage cookies or limit personalized advertising.</p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Retention and security</h2>
          <p className="mt-3 leading-7 text-slate-600">We keep information only for as long as reasonably necessary for the purposes described above, including our business, legal, and record-keeping needs. We use reasonable measures intended to protect information, but no online service can guarantee absolute security.</p>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Your choices and rights</h2>
          <p className="mt-3 leading-7 text-slate-600">Depending on where you live, you may have rights to request access, correction, deletion, or restriction of certain personal information, or to object to particular processing. To make a request or ask a privacy question, contact us through WhatsApp.</p>
          <a href="https://wa.me/message/3KBYQFCO56WMC1" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-5 font-bold text-white transition hover:bg-[#20bd5c] focus:outline-none focus:ring-4 focus:ring-green-200">💬 Contact us on WhatsApp</a>
        </section>

        <section className={sectionClass}>
          <h2 className="text-2xl font-extrabold tracking-[-.035em] text-slate-950">Changes to this policy</h2>
          <p className="mt-3 leading-7 text-slate-600">We may update this policy from time to time. The latest version will always be posted on this page with its updated date.</p>
        </section>
      </div>
    </article>
  </main>;
}
