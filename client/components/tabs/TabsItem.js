const TabsItem = ({ label, Icon, active, setActive }) => {
  return (
    <li className="md:mx-4">
      <a
        href="#"
        onClick={setActive}
        className={`flex flex-col content-center p-4 rounded-t-lg border-b-4 border-transparent ${
          active
            ? "text-blue-400 border-blue-400"
            : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        }`}
      >
        <Icon size={40} className="mx-auto" />
        <span className="">{label}</span>
      </a>
    </li>
  );
};

export default TabsItem;
