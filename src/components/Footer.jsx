const Footer = ({ handleCheckCount, itemCount }) => {
  return (
    <footer className="bg-gray-400 text-center py-5">
      <p>
        {" "}
        No. of items: {itemCount}. Checked items: {handleCheckCount()}{" "}
      </p>
    </footer>
  );
};

export default Footer;
