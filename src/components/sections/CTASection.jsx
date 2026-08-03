export default function CTASection() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto bg-surface-bright rounded-[32px] p-lg md:p-xl text-center card-shadow relative overflow-hidden border border-outline-variant/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-container/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <h2 className="relative z-10 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">
          Siap Menjadi Bagian dari Solusi?
        </h2>

        <p className="relative z-10 font-body-md text-body-md text-on-surface-variant mb-lg max-w-lg mx-auto">
          Bergabunglah dengan ribuan changemaker lainnya. Mulai buat jejak kebaikan Anda hari ini, tidak peduli seberapa kecil.
        </p>

        <button className="relative z-10 bg-primary-container text-on-primary font-title-md text-title-md px-xl py-sm rounded-full hover:bg-primary transition-colors duration-200 shadow-md shadow-primary-container/30 active:scale-95">
          Daftar Sekarang Gratis
        </button>
      </div>
    </section>
  );
}
