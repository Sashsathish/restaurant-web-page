import { navLinks } from '../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogout } from '@/reactquery';
import { clearUser } from '@/store/slices/authSlice';
import { AppDispatch } from '@/store/store';

const Header = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { mutateAsync, isPending } = useLogout();
  async function submitHandler() {
    const res = await mutateAsync();

    if (res.error) {
      alert(res.error || 'Logout failed');
      return;
    }
    dispatch(clearUser());
    navigate('/login');
  }
  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-3 bg-black z-[1] md:bg-transparent md:px-10 md:py-4 md:border-b md:border-white md:border-opacity-20">
      <div className="flex flex-col items-center text-custom-white">
        <span className="mt-2 leading-3 text-md">COFFEE</span>
        <span className="text-sm font-thin leading-6 ">BLEND</span>
      </div>

      <nav className="hidden gap-6 md:flex ">
        {navLinks.map((data, index) => (
          <button
            key={index}
            className="text-white capitalize duration-300 hover:text-custom-primary"
          >
            {data.name}
          </button>
        ))}
        <button
          onClick={submitHandler}
          className="px-3 py-2 text-white rounded-sm bg-custom-primary"
        >
          {isPending ? 'logging out' : 'Logout '}
        </button>
      </nav>
      {/* <button className="block text-custom-white md:hidden">Burger</button> */}
    </header>
  );
};

export default Header;
