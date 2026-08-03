import EventCard from '../ui/EventCard';
import { mockEvents } from '../../data/mockEvents';

export default function FeaturedEventsSection() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">
              Peluang Mendesak
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Acara yang membutuhkan bantuan Anda segera.
            </p>
          </div>

          <button className="hidden md:flex text-primary font-label-sm text-label-sm items-center gap-xs hover:underline">
            Lihat Semua <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {mockEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <button className="md:hidden mt-md text-primary font-label-sm text-label-sm w-full py-sm border border-outline-variant rounded-full flex justify-center items-center gap-xs">
          Lihat Semua
        </button>
      </div>
    </section>
  );
}
