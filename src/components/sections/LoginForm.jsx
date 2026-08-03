import { useState } from 'react';
import SocialLoginButtons from '../ui/SocialLoginButtons';

export default function LoginForm({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });

    // Simulate successful login - navigate to home
    if (onNavigate) {
      alert('Login berhasil! (Demo)');
      onNavigate('home');
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    alert('Halaman Register belum tersedia (Demo)');
  };

  return (
    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
      <div className="mb-10 text-center md:text-left">
        {/* BantuSesama Logo */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer" onClick={() => onNavigate?.('home')}>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">volunteer_activism</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary">BantuSesama</span>
        </div>

        <h1 className="text-headline-lg mb-2">Selamat Datang Kembali</h1>
        <p className="text-body-md text-on-surface-variant">
          Silakan masuk ke akun Anda untuk melanjutkan perjalanan kebaikan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-label-sm text-on-surface mb-2" htmlFor="email">
            Alamat Email
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-label-sm text-on-surface" htmlFor="password">
              Kata Sandi
            </label>
            <a className="text-label-sm text-primary hover:underline" href="#">
              Lupa kata sandi?
            </a>
          </div>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center">
          <input
            className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded"
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label className="ml-2 block text-label-sm text-on-surface-variant" htmlFor="remember-me">
            Ingat saya di perangkat ini
          </label>
        </div>

        <button
          className="w-full bg-primary hover:bg-green-700 text-on-primary font-semibold py-3 px-4 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          type="submit"
        >
          Sign In
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-body-md text-on-surface-variant">
          Belum punya akun?{' '}
          <a className="text-primary font-semibold hover:underline cursor-pointer" onClick={handleRegisterClick}>
            Daftar Sekarang
          </a>
        </p>
      </div>

      <SocialLoginButtons />
    </div>
  );
}
