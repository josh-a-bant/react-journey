import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Student details</h1>
      <p>studentId: {id}</p>
    </div>
  );
};

export default StudentDetails;
