import React from 'react';
import './Courses.css';

const Courses = () => {
  const coursesData = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/564x/e2/df/a3/e2dfa3e2d36d1bbf9297f3b52e6e444b.jpg',
      heading: 'Course 1',
      description: 'Four Wheeler Training',
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/564x/fc/20/d6/fc20d62c16ebf1dd8777c3e79783b21c.jpg',
      heading: 'Course 2',
      description: 'Two Wheeler Training ',
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/564x/41/c4/91/41c4913d6934c3d8f4fc95ddd1881caf.jpg',
      heading: 'Course 3',
      description: 'Refresher Four Wheeler Training ',
    },
    {
      id: 4,
      imageUrl: 'https://i.pinimg.com/564x/d1/f0/68/d1f068f076dd1d2090b35d602f62948f.jpg',
      heading: 'Course 4',
      description: 'Other courses',
    },
  ];

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="courses-list">
        {coursesData.map((course) => (
          <div key={course.id} className="course-item">
            <img src={course.imageUrl} alt={`Course ${course.id}`} />
            <div className="course-info">
              <h3>{course.heading}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
