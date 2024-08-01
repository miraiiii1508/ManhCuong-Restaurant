const CustomLink = ({ itemName, href }) => {
  return (
    <div className="cursor-pointer py-1 hover:text-[#fff] relative after:2md:absolute after:2md:bottom-0 after:2md:left-0 after:2md:bg-red-400 after:2md:h-0.5 after:2md:w-0 hover:after:2md:w-full after:2md:transition-all after:2md:ease-in-out after:2md:duration-300">
      <a href={href}>{itemName}</a>
    </div>
  );
};
export default CustomLink;
