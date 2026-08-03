export default function ImpactStatsSection() {
  const stats = [
    { value: "10,000+", label: "Relawan Aktif" },
    { value: "500+", label: "Organisasi Mitra" },
    { value: "1,000+", label: "Event Selesai" }
  ];

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-lg">
        {stats.map((stat, index) => (
          <>
            <div key={index} className="text-center">
              <div className="font-display-lg text-display-lg text-primary mb-xs">{stat.value}</div>
              <div className="font-title-md text-title-md text-on-surface-variant">{stat.label}</div>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-16 bg-outline-variant/50" />
            )}
          </>
        ))}
      </div>
    </section>
  );
}
