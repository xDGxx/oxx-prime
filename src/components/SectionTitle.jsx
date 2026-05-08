export default function SectionTitle({
  label,
  title,
}) {
  return (
    <>
      <div className="condensed-font mb-2 text-sm uppercase tracking-[5px] text-red-600">
        {label}
      </div>

      <h2 className="title-font text-5xl leading-none md:text-7xl">
        {title}
      </h2>

      <div className="mt-5 h-1 w-16 bg-red-600" />
    </>
  );
}