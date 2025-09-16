export const Hero = () => {
  return (
    <div className="relative">
      <img
        alt="joinImage"
        className="w-full h-64 object-cover opacity-75"
        src="/assets/banner1-Bdk5WWvd.jpg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white">
        <h1 className="text-4xl text-center font-bold p-2">Join our team!</h1>
        <p className="text-lg text-center pb-4">
          Complete the form below and we will shortly be in touch with you
        </p>
      </div>
    </div>
  );
};
