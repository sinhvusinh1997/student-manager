import React, { useState, useContext } from 'react';

// ==================== Components ====================
import Title from './Title';
import StudentList from './StudentList';
import Footer from './Footer';

// ==================== Contexts ====================
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HandleContext } from '../../contexts/HandleContext';


const IndexMain = () => {
  const { isAuth } = useContext(AuthContext);
  const { isLight, theme } = useContext(ThemeContext);
  const { getStudent } = useContext(HandleContext);

  return (
    <div className="wrapper-main" style={isLight ? theme.bg.light : theme.bg.dark}>
      <Title />

      <div className="student-container">
        {isAuth ? (
          getStudent.map(student =>
            <StudentList
              student={student}
              key={student.id}
            />
          )
        ) : (<p style={{ textAlign: 'center', fontSize: '20px' }}>Please Login!</p>)}

      </div>


      <Footer />
    </div>
  )
};

export default IndexMain;