import React, { createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import queryString from 'query-string';

export const HandleContext = createContext();

const HandleContextProvider = ({ children }) => {

  const baseURL = `https://js-server-student-list.herokuapp.com/api`;

  const [getStudent, setGetStudent] = useState('');
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 1,
    _totalRows: 20
  });

  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 10,
  });

  // ===== GET STUDENTs =============================
  useEffect(() => {
    const fetchStudentLists = async () => {
      try {
        const paramString = queryString.stringify(filter)
        const reponse = await axios.get(`${baseURL}/student?${paramString}`);
        const { data, pagination } = reponse.data;

        setGetStudent(data);
        setPagination(pagination);

      } catch (error) { alert(error.message) }
    };

    fetchStudentLists()
  }, [filter]);

  const handlePageChange = (newPage) => {
    setFilter({
      ...filter,
      _page: newPage,
    })
  };

  // ===== ADD NEW STUDENT =================================================
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [gender, setGender] = useState('');
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const titles = [name, studentID, gender, dayOfBirth, phoneNumber, email, avatar];
  const setTitles = [setName, setStudentID, setGender, setDayOfBirth, setPhoneNumber, setEmail, setAvatar];

  const handleChangeTitle = e => {
    const IdTitle = e.target.parentNode.id;
    const value = e.target.value;

    switch (IdTitle) {
      case 'name':
        setTitles[0](value);
        break;
      case 'studentID':
        setTitles[1](value);
        break;
      case 'gender':
        setTitles[2](value);
        break;
      case 'dayOfBirth':
        setTitles[3](value);
        break;
      case 'phoneNumber':
        setTitles[4](value);
        break;
      case 'email':
        setTitles[5](value);
        break;
      case 'avatar':
        setTitles[6](value);
        break;
      default: return;
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${baseURL}/student`, {
        'name': titles[0],
        'studentID': titles[1],
        'gender': titles[2],
        'dayOfBirth': titles[3],
        'phoneNumber': titles[4],
        'email': titles[6],
        'avatar': titles[7],
      });
      setTitles.map(setTitle => setTitle(''));
      setFilter({ ...filter });
    } catch (error) { alert(error.message) }
  };

  // ===== VIEW STUDENT =====================
  // const viewData = useRef(null);

  const getViewStudent = async ID => {
    try {
      const reponse = await axios.get(`${baseURL}/student/${ID}`);

      setName(reponse.data.name);
      setStudentID(reponse.data.studentID);
      setGender(reponse.data.gender);
      setDayOfBirth(reponse.data.dayOfBirth);
      setPhoneNumber(reponse.data.phoneNumber);
      setEmail(reponse.data.email);
      setAvatar(reponse.data.avatar)

    } catch (error) { alert(error.message) }
  };

  const handleContextData = {
    // ===== GET STUDENT LIST ===============
    getStudent,

    // ===== PAGINATION =====================
    pagination,
    handlePageChange,

    // ===== ADD NEW STUDENTs ===============
    titles,
    setTitles,
    handleChangeTitle,
    handleSubmit,

    // ===== VIEW STUDENT ===================
    getViewStudent,
  };

  return (
    <HandleContext.Provider value={handleContextData}>
      {children}
    </HandleContext.Provider>
  )
};

export default HandleContextProvider;