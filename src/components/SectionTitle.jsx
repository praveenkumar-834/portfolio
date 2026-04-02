export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm opacity-80">{subtitle}</p> : null}
    </div>
  );
}