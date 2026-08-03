export default function HowItWorksSection() {
  const steps = [
    {
      icon: "search",
      title: "Temukan Event",
      description: "Jelajahi berbagai peluang relawan yang sesuai dengan minat dan keterampilan Anda."
    },
    {
      icon: "how_to_reg",
      title: "Daftar & Ikuti",
      description: "Ajukan diri dengan mudah melalui platform dan tunggu konfirmasi dari penyelenggara."
    },
    {
      icon: "volunteer_activism",
      title: "Buat Dampak",
      description: "Hadir, berkontribusi, dan jadilah bagian dari perubahan positif di komunitas Anda."
    }
  ];

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
          Tiga Langkah Sederhana
        </h2>

        <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-2xl mx-auto">
          Mulai perjalanan relawan Anda hanya dengan beberapa klik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md lg:gap-lg">
          {steps.map((step, index) => (
            <div key={index} className="bg-surface-bright rounded-2xl p-md flex flex-col items-center text-center card-shadow hover-lift">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-md">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}
                >
                  {step.icon}
                </span>
              </div>

              <h3 className="font-title-md text-title-md text-on-surface mb-xs">{step.title}</h3>

              <p className="font-body-md text-body-md text-on-surface-variant">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
