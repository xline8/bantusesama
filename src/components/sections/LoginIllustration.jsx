export default function LoginIllustration() {
  return (
    <div className="hidden md:flex md:w-1/2 bg-primary-container/10 p-12 flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full -ml-24 -mb-24" />

      <div className="relative z-10 text-center">
        <img
          alt="Community Impact"
          className="w-full max-w-sm rounded-2xl shadow-lg mb-8 mx-auto object-cover aspect-[4/3]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD51ZZXXVtxFQVTEtKncxUnTFjbqbZ5ClxQFi9KoYiRkhVXLZsMFreBcw1sVS61HRRtb3fjsPTiylNI9JOt6H5_kBZtZu-kycSLLRU4ClGCByjC2xWu-LR0LwD_kUQPfnJ3iAhtjmx23pM2gd_apUQhYLebnzRi3DA_z1JhENuiYF5wtLua2erVMtO7XcBb2bz_wPWHduZxfQmDSVB8l6G3deIiln44gczTK-AePKJyEf5wHV55c-FouA"
        />
        <h2 className="text-headline-lg text-primary mb-4">Wujudkan Kebaikan Bersama</h2>
        <p className="text-body-lg text-on-surface-variant max-w-md mx-auto">
          Bergabunglah dengan ribuan relawan dan donatur untuk menciptakan perubahan nyata di masyarakat.
        </p>
      </div>
    </div>
  );
}
