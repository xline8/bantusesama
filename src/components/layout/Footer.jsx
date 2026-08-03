export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest border-t border-outline-variant py-lg px-margin-desktop w-full flex flex-col items-center justify-center gap-xs">
      <div className="font-title-md text-title-md text-primary mb-sm">BantuSesama</div>

      <div className="flex gap-md mb-sm">
        <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">
          Privacy Policy
        </a>
        <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">
          Terms of Service
        </a>
        <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">
          Contact Us
        </a>
        <a className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-all" href="#">
          About
        </a>
      </div>

      <div className="text-on-surface-variant font-label-sm text-label-sm">
        © 2024 BantuSesama. All rights reserved.
      </div>
    </footer>
  );
}
