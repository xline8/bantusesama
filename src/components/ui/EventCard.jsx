export default function EventCard({
  id,
  image,
  category,
  categoryColor = "surface-container-low",
  title,
  organization,
  filledCount,
  totalCount,
  isUrgent = false
}) {
  const progressPercentage = (filledCount / totalCount) * 100;

  return (
    <div className="bg-surface-container-lowest rounded-2xl card-shadow overflow-hidden hover-lift flex flex-col border border-transparent">
      <div className="h-48 w-full relative">
        <img
          className="w-full h-full object-cover rounded-t-2xl"
          src={image}
          alt={title}
        />
        {isUrgent && (
          <div className="absolute top-sm right-sm bg-surface-container-lowest/90 backdrop-blur-sm px-xs py-base rounded-full flex items-center gap-base">
            <span className="w-2 h-2 rounded-full bg-error" />
            <span className="font-label-sm text-[12px] font-medium text-on-surface">Mendesak</span>
          </div>
        )}
      </div>

      <div className="p-md flex flex-col flex-grow">
        <div className="flex gap-xs mb-sm">
          <span className={`bg-${categoryColor} text-primary font-label-sm text-[12px] px-xs py-base rounded-full`}>
            {category}
          </span>
        </div>

        <h3 className="font-title-md text-title-md text-on-surface mb-xs line-clamp-2">
          {title}
        </h3>

        <p className="font-body-md text-[14px] text-on-surface-variant mb-md flex items-center gap-xs">
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>business</span>
          {organization}
        </p>

        <div className="mt-auto">
          <div className="flex justify-between font-label-sm text-[12px] text-on-surface-variant mb-xs">
            <span>Kuota Relawan</span>
            <span className="text-primary font-semibold">{filledCount} / {totalCount} Terisi</span>
          </div>

          <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary-container h-full rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <button className="w-full mt-md bg-surface-container-lowest text-primary border border-primary-container font-label-sm text-label-sm py-sm rounded-full hover:bg-primary-container hover:text-on-primary transition-colors duration-200">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
