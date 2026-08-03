export default function HeroSection() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-xl lg:py-[120px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
        <div className="z-10 flex flex-col gap-sm">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            Bersama Wujudkan <span className="text-primary-container">Perubahan Nyata</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mt-sm mb-md">
            Platform komunitas yang menghubungkan relawan berdedikasi dengan organisasi berdampak positif.
            Temukan cara mudah untuk berkontribusi dan membuat perbedaan hari ini.
          </p>

          <div className="flex flex-wrap gap-sm">
            <button className="bg-gradient-to-r from-primary-container to-secondary text-on-primary font-title-md text-title-md px-md py-sm rounded-full hover:shadow-lg hover:shadow-primary-container/20 transition-all active:scale-95">
              Mulai Relawan
            </button>

            <button className="bg-surface-container-lowest text-primary-container border-[1.5px] border-primary-container font-title-md text-title-md px-md py-sm rounded-full hover:bg-surface-container-low transition-all active:scale-95">
              Daftarkan Organisasi
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full aspect-video lg:aspect-square max-h-[600px] rounded-[32px] overflow-hidden shadow-2xl shadow-primary-container/10">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjXio3f2BUiV-QsBm99JHUICMmwKRm1J2ajEXB47tjQ64CT2ruWRFLFHNPA27XyVx9sJv9GX4yYpoWbGJlvygHB0i3Uq1HwHmkNs0HtVH6_MPmXXECsuDxkRBo71CU6pCMWD68yMgL07ZJ6Sm7I4cfTKTI8J6PzkJ2LAwsmNlm1G-HYZG7ld9othHnMFUGlfEG5KrtKZib1MIboQMQOwo3OQ7QhIPC7Nhi8T5q1keUfDqGhtnCnKKvrNBo0auOXBpU6gYzgu9WUkU4"
            alt="A high-quality, inspiring photo of a diverse group of young volunteers planting trees in a sunny, green park."
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-surface-container rounded-full blur-3xl opacity-50 -z-10" />
    </section>
  );
}
