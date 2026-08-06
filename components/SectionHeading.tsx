export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
 return <div className="mx-auto max-w-2xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-teal-600">{eyebrow}</p><h2 className="text-3xl font-extrabold tracking-[-.045em] text-slate-950 sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}</div>
}
