function ButtonContainer({ jobs, currenItem, setCurrentItem }) {
  return (
    <div className="flex md:flex-col md:gap-3 w-max mx-auto mb-5  ">
      {jobs.map((job, index) => {
        return (
          <button
            onClick={() => setCurrentItem(index)}
            className={
              index === currenItem
                ? "text-xs px-8  border-transparent md:border-l-2 md:hover:border-purple-700 transition duration-300 text-purple-700 md:border-purple-700"
                : "text-xs px-8  border-transparent md:border-l-2 md:hover:border-purple-700 transition duration-300"
            }
            key={job.id}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonContainer;
