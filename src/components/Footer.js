const Footer = () => {
  return (
    <div className="bg-primary-color">
      <div className="mx-auto p-8 text-lg text-white font-sora">
        <div className="flex flex-col gap-1">
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Earn with us
          </a>
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Privacy Policy
          </a>
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Sitemap
          </a>
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Help Center
          </a>
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Careers
          </a>
          <a href="#" className="text-white flex-shrink-0 w-[185px]">
            Contact Us
          </a>
        </div>

        <div className="text-center mt-8">
          <b>Air Academic</b>
          <span> 2023 copyright all rights reserved</span>
        </div>
      </div>
      <img
        className="mx-auto mt-8 rounded-10xs opacity-[0.1]"
        alt=""
        src="/polygon-9.svg"
      />
    </div>
  );
};

export default Footer;
