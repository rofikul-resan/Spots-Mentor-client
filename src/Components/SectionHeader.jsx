const SectionHeader = ({ title }) => {
  return (
    <div className="md:w-7/12 mx-auto p-4 text-center mb-6 ">
      <h1 className="text-xl md:text-4xl font-semibold my-3 ">{title}</h1>
      <p>
        This activity is about reading. The vocabulary focus is on sports. They
        will read a text about two TV show characters and answer shorts
        questions about the text ...
      </p>
    </div>
  );
};

export default SectionHeader;
