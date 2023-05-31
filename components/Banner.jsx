import Image from 'next/image';

const Banner = () => {
  return (
    <section class='flex justify-between items-center'>
      <div class='w-2/5 flex flex-col justify-start items-start gap-5'>
        <h1 class='text-6xl leading-snug font-bold text-sky-500'>
          Wellcome to the introductory class of web development.
        </h1>
        <p class='text-base text-sky-950'>
          Here you can learn some basic knowledge about frontend and backend
          development.
        </p>
      </div>
      <div class='w-2/5'>
        <Image
          class='w-full'
          src='/images/banner.jpg'
          alt='banner'
          width={1080}
          height={720}
        />
      </div>
    </section>
  );
};

export default Banner;
