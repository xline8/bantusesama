import LoginForm from '../components/sections/LoginForm';
import LoginIllustration from '../components/sections/LoginIllustration';

export default function LoginPage({ onNavigate }) {
  return (
    <div className="h-full bg-background text-on-surface flex items-center justify-center min-h-screen">
      <main className="w-full max-w-5xl mx-auto p-4 md:p-8">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          <LoginIllustration />
          <LoginForm onNavigate={onNavigate} />
        </div>

        <footer className="mt-8 text-center text-label-sm text-on-surface-variant/60">
          © 2024 BantuSesama. Dibuat dengan cinta untuk Indonesia.
        </footer>
      </main>
    </div>
  );
}
