import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function Duties({ duties }) {
  const renderedDuties = duties.map((duty, index) => {
    const id = uuidv4();
    return (
      <div key={id} className="flex text-sm items-center gap-x-8 mb-4">
        <MdKeyboardDoubleArrowRight className="text-purple-700 text-lg" />
        <p className="text-slate-700">{duty}</p>
      </div>
    );
  });

  return <div>{renderedDuties}</div>;
}

export default Duties;
