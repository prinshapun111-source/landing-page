"use client";

import { useEffect, useRef } from "react";

const formId = "6a9a5e4ea417fd519e2aebf1";
const formClass = `ff-${formId}`;

export default function CTAForm() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = embedRef.current?.querySelector<HTMLElement>(`[data-ff-el="root"]`);
    if (!root) return;
    let redirected = false;
    const observer = new MutationObserver(() => {
      if (root.dataset.ffStage === "success" && !redirected) {
        redirected = true;
        window.setTimeout(() => window.location.assign("/thanks"), 1800);
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });

    const w = window as Window & { FlodeskObject?: string; fd?: ((...args: unknown[]) => void) & { q?: unknown[][] } };
    w.FlodeskObject = "fd";
    const queue = ((...args: unknown[]) => { (queue.q = queue.q || []).push(args); }) as ((...args: unknown[]) => void) & { q?: unknown[][] };
    w.fd = w.fd || queue;
    // Keep Flodesk's cache-busting calculation exactly as supplied in its embed.
    const version = `?v=${Math.floor(new Date().getTime() / (120 * 1000)) * 60}`;
    const moduleScript = document.createElement("script");
    moduleScript.async = true; moduleScript.type = "module"; moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
    document.head.appendChild(moduleScript);
    const legacyScript = document.createElement("script");
    legacyScript.async = true; legacyScript.noModule = true; legacyScript.src = `https://assets.flodesk.com/universal.js${version}`;
    document.head.appendChild(legacyScript);
    w.fd("form:handle", { formId, rootEl: `.${formClass}` });
    return () => observer.disconnect();
  }, []);

  return <section id="consultation-form" className="scroll-mt-4 bg-slate-950 px-5 py-20 sm:py-28">
    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.7fr_1.1fr] lg:items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-teal-300">Book the call</p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-[-.05em] text-white">One-to-one consultation.<br /><span className="text-indigo-300">Customized strategy.</span></h2>
        <p className="mt-5 max-w-md text-lg leading-8 text-slate-300">Fill out the form to schedule your free AI marketing consultation.</p>
      </div>
      <div ref={embedRef} className="flodesk-shell rounded-[1.75rem] bg-white p-2 shadow-2xl sm:p-3">
        <div className={formClass} data-ff-el="root" data-ff-version="3" data-ff-type="inline" data-ff-name="inlineNoImage" data-ff-stage="default">
          <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IiIsInJlZGlyZWN0VXJsIjoiL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0=" style={{ display: "none" }} />
          <div className={`${formClass}__container`}><div className={`${formClass}__wrapper`}>
            <form className={`${formClass}__form`} action="https://form.flodesk.com/forms/6a9a5e4ea417fd519e2aebf1/submit" method="post" data-ff-el="form">
              <div className={`${formClass}__content fd-form-content`} data-ff-el="content">
                <div className={`${formClass}__fields`} data-ff-el="fields">
                  <Field id="firstName" name="firstName" label="First Name" placeholder="Enter your first name" tab="firstName::email" />
                  <Field id="email" name="email" label="Email Address" placeholder="Enter your email" tab="email:firstName:fields.whatsappNumber" />
                  <Field id="uR15ELv5sV" name="fields.whatsappNumber" label="WhatsApp Number" placeholder="Enter your WhatsApp number" tab="fields.whatsappNumber:email:fields.businessName" />
                  <Field id="CABauib8YC" name="fields.businessName" label="Business Name" placeholder="Enter your business name" tab="fields.businessName:fields.whatsappNumber:fields.websiteLinkFacebookLink" />
                  <Field id="C3T8p0TkiZ" name="fields.websiteLinkFacebookLink" label="Website / Facebook Link" placeholder="Enter your website or Facebook URL" tab="fields.websiteLinkFacebookLink:fields.businessName:submit" />
                  <div className={`${formClass}__field fd-form-group`}>
                    <label htmlFor={`${formId}-message`} className={`${formClass}__label fd-form-label`}>Anything You Want to Say</label>
                    <textarea id={`${formId}-message`} name="message" className={`${formClass}__control fd-form-control`} placeholder="Type your message here..." rows={4} />
                  </div>
                  <input type="text" maxLength={255} name="confirm_email_address" style={{ display: "none" }} />
                </div>
                <div className={`${formClass}__footer`} data-ff-el="footer"><button type="submit" className={`${formClass}__button fd-btn`} data-ff-el="submit" data-ff-tab="submit">Book Free Consultation</button></div>
              </div>
              <div className={`${formClass}__success fd-form-success`} data-ff-el="success"><div className={`${formClass}__success-message`}>You’ve successfully signed up! Redirecting you now…</div></div>
              <div className={`${formClass}__error fd-form-error`} data-ff-el="error" />
            </form>
          </div></div>
        </div>
      </div>
    </div>
  </section>;
}

function Field({ id, name, label, placeholder, tab }: { id: string; name: string; label: string; placeholder: string; tab: string }) {
  const inputId = `${formId}-${id}`;
  return <div className={`${formClass}__field fd-form-group`}>
    <label htmlFor={inputId} className={`${formClass}__label fd-form-label`}>{label}</label>
    <input id={inputId} className={`${formClass}__control fd-form-control`} type="text" maxLength={255} name={name} placeholder={placeholder} data-ff-tab={tab} required />
  </div>;
}
