import React, { useContext, useState } from 'react';

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

  const bgStyle = isLight ? theme.bg.light : theme.bg.dark;

  // ========= Trigger re-render to display totals IDs ======================
  const [isClick, setClick] = useState(true);
  const trigger = () => setClick(!isClick);



  return (
    <div className="wrapper-main" style={bgStyle}>
      <Title />

      <div className="student-container" onClick={trigger}>
        {isAuth ? (
          getStudent.map(student =>
            <StudentList
              student={student}
              key={student.id} />)) :
          (<p style={{ textAlign: 'center', fontSize: '20px' }}>Please Login!</p>)}
      </div>

      <Footer />
    </div>
  )
};

export default IndexMain;