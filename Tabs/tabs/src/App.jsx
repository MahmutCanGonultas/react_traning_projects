import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currenItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>SELAMMMM</h1>;
  }
  return (
    <section className="md:max-xl md:w-10/12 md:my-20 md:mx-auto md:flex md:gap-20 mt-6 ">
      <ButtonContainer
        jobs={jobs}
        currenItem={currenItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currenItem={currenItem} />
    </section>
  );
};
export default App;

// --max-width: 1120px;  width: 80vw;
