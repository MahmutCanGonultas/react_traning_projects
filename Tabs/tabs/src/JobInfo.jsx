import Duties from "./Duties";

function JobInfo({ jobs, currenItem }) {
  const { title, company, dates, duties } = jobs[currenItem];

  return (
    <article className="flex flex-col mx-10 ">
      <h1 className="text-3xl"> {title}</h1>
      <span className="py-1 px-3 my-1 self-start border rounded-md  bg-slate-300 text-neutral-700">
        {company}
      </span>
      <span className="text-sm text-slate-500 tracking-widest mb-8">
        {dates}
      </span>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
