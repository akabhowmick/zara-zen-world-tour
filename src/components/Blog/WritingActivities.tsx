import { Link } from "react-router-dom";
import { writingActivities } from "../../utils/blogInfo";

export const WritingActivities = () => {
  return (
    <>
      {writingActivities.map(({ title, description, to, cta }) => (
        <div key={to} className="bg-white rounded-lg p-4 shadow text-center">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <Link to={to} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            {cta}
          </Link>
        </div>
      ))}
    </>
  );
};
