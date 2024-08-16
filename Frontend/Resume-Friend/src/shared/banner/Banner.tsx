const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-[50vh] md:min-h-[100vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center leading-tight opacity-0 animate-fadeIn">
          Resume Builder
        </h1>
        <p className="text-sm md:text-xl text-white mt-6 max-w-2xl text-center opacity-0 animate-fadeIn delay-500">
          Create professional resumes effortlessly with our intuitive tool.
        </p>
      </div>
    </section>
  );
};

export default Banner;
