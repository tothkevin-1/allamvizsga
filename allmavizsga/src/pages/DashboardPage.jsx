import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { courses } from '../data/dummyData'; // Importáljuk az ál-adatokat
import CourseCard from '../components/CourseCard'; // Importáljuk a kártya komponenst

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard</h2>
        <div>
          <span>Üdvözlünk, {user?.name}!</span>
          <button onClick={logout} style={{ marginLeft: '1rem' }}>Kijelentkezés</button>
        </div>
      </div>
      
      <hr />

      <h3>Elérhető kurzusok</h3>
      <div>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;