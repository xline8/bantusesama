export default function SocialLoginButtons() {
  const handleGoogleLogin = () => {
    // Handle Google OAuth
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // Handle Facebook OAuth
    console.log('Facebook login clicked');
  };

  return (
    <div className="mt-8 pt-8 border-t border-outline-variant">
      <p className="text-center text-label-sm text-on-surface-variant mb-4">Atau masuk dengan</p>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors"
        >
          <img
            alt="Google"
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT4EvoX5eiAO6YgeWRrlgvG3UEZZFSmFM45AnglLvgCFj2-n7vEujckfl-JiYJGc6YpC2fVfQaafBsS0xYl8eJI98ZiJ_c_XtFanKMQWyMpuZR9p-DBrvjdeDrK35lRXCknXr5I4ZYzs9tIbXBGNs_F4z_PJrLOXOs6aILHr7h8mj1TAY3mARCtAKr_yW-g-oOmVCD30K8pL6lZh0jXw5Ge71iV5o5UMC9JygPGMbTpQQMDdU_lY6Iaw"
          />
          <span className="text-label-sm">Google</span>
        </button>

        <button
          type="button"
          onClick={handleFacebookLogin}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors"
        >
          <img
            alt="Facebook"
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf6868uQBxHLVwuNoQzu1zo3J0Sr7CeFQqA96rxVfSv06oaYMCvV_8xVY-aOjuqfuTdWVETTPQMym3oJrATFP7m5iX0OtoR2wI_eFdjyIP6zCPuLjKRkfBGHnDhiaGhXWsrONQq_W251B7f-GlYcrQKh7Is-Bui7VjZKF6ds_V3GgxIBeCY-rWttD9wlOn_wOmxnX6J2Jm5TV-YdjqYRylFA5sVZVcrW6bkbjYytOH5XqoICzKwRj90g"
          />
          <span className="text-label-sm">Facebook</span>
        </button>
      </div>
    </div>
  );
}
