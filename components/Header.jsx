import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'About',
    link: '#',
  },
  {
    title: 'Courses',
    link: '#',
  },
  {
    title: 'Projects',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className='p-5 shadow-lg'>
      <nav className='flex justify-between items-center gap-4'>
        <Image
          width={140}
          height={40}
          src='https://www.vivasoftltd.com/wp-content/uploads/2022/09/Logo-5.svg'
          alt='logo'
        />

        <ul class='flex justify-end items-center gap-4'>
          {navLinks?.map((navlink, index) => {
            return (
              <li key={index}>
                <Link
                  class='hover:underline underline-offset-2 transition-all duration-150'
                  href={navlink?.link}>
                  {navlink?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
