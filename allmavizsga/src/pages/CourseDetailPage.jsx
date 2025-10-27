import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses, assignments } from '../data/dummyData';

const CourseDetailPage = () => {
  // A useParams hook segítségével kiolvassuk az URL-ből a :courseId paramétert
  const { courseId } = useParams();

  // Megkeressük a kurzust az ID alapján (az URL paraméter string, ezért konvertálunk)
  const course = courses.find(c => c.id === parseInt(courseId));
  const courseAssignments = assignments[courseId] || [];

  // Ha nincs ilyen kurzus, jelenítsünk meg egy hibaüzenetet
  if (!course) {
    return <div>A keresett kurzus nem található. <Link to="/dashboard">Vissza a dashboardra</Link></div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Tanár:</strong> {course.teacher}</p>
      <p>{course.description}</p>
      <hr />
      <h3>Feladatok</h3>
      {courseAssignments.length > 0 ? (
        <ul>
          {courseAssignments.map(assignment => (
            <li key={assignment.id}>
              {assignment.title} (Határidő: {assignment.deadline})
            </li>
          ))}
        </ul>
      ) : (
        <p>Ehhez a kurzushoz még nincsenek feltöltve feladatok.</p>
      )}

      <br />
      <Link to="/dashboard">Vissza a kurzusok listájához</Link>
    </div>
  );
};

export default CourseDetailPage;