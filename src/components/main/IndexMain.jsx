import React, { useState } from 'react';
import StudentList from './StudentList';

const IndexMain = () => {
  const [studentList, setStudentList] = useState([
    {
      "id": "70d63c57-2751-4d32-8882-95dd6ef68996",
      "studentID": 29143,
      "name": "Florence Krajcik",
      "gender": "Female",
      "dayOfBirth": "Fri Jan 03 1997",
      "phoneNumber": "(852) 555-6780 x51458",
      "email": "Ova.Treutel45@yahoo.com",
      "avatar": "https://cdn.fakercloud.com/avatars/angelcolberg_128.jpg",
      "createdAt": 1619675068173,
      "updatedAt": 1619675068173
    },
    {
      "id": "76e8e16f-99c1-47fd-9fb4-65b6389b5f25",
      "studentID": 51293,
      "name": "Ernesto Schmitt",
      "gender": "Male",
      "dayOfBirth": "Fri Jan 03 1997",
      "phoneNumber": "203-279-4902 x7266",
      "email": "Horacio64@hotmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/anaami_128.jpg",
      "createdAt": 1619675068173,
      "updatedAt": 1619675068173
    },
    {
      "id": "3d1fbb34-e223-44b0-81a6-4c15b5fbb0d0",
      "studentID": 2895,
      "name": "Gerald Kemmer",
      "gender": "Female",
      "dayOfBirth": "Thu Jan 02 1997",
      "phoneNumber": "(264) 867-1484",
      "email": "Patience_Toy44@hotmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/madebybrenton_128.jpg",
      "createdAt": 1619675068174,
      "updatedAt": 1619675068174
    },
    {
      "id": "1bce1be9-022c-4e4f-9bf2-940d0389dbfa",
      "studentID": 93440,
      "name": "Thomas Cole",
      "gender": "Male",
      "dayOfBirth": "Thu Jan 02 1997",
      "phoneNumber": "835.592.6390 x17139",
      "email": "Parker_Runolfsdottir@gmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/bowbrick_128.jpg",
      "createdAt": 1619675068174,
      "updatedAt": 1619675068174
    },
    {
      "id": "39493378-e0e4-46d5-af32-876d9e6a3f14",
      "studentID": 2463,
      "name": "Mr. Guy Reilly",
      "gender": "Male",
      "dayOfBirth": "Fri Jan 03 1997",
      "phoneNumber": "426-974-5740 x74249",
      "email": "Braeden.Wunsch@yahoo.com",
      "avatar": "https://cdn.fakercloud.com/avatars/bistrianiosip_128.jpg",
      "createdAt": 1619675068174,
      "updatedAt": 1619675068174
    },
    {
      "id": "48bb6f58-423b-4326-97ee-18df94c1f343",
      "studentID": 22728,
      "name": "Elsie Williamson IV",
      "gender": "Male",
      "dayOfBirth": "Wed Jan 01 1997",
      "phoneNumber": "(763) 459-2221 x235",
      "email": "Pink_Stehr93@hotmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/danvierich_128.jpg",
      "createdAt": 1619675068175,
      "updatedAt": 1619675068175
    },
    {
      "id": "d6f967b3-26f6-40bb-af0b-797529759ff5",
      "studentID": 90005,
      "name": "Silvia Stehr",
      "gender": "Female",
      "dayOfBirth": "Wed Jan 01 1997",
      "phoneNumber": "1-731-783-3733",
      "email": "Leopoldo_Becker@gmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/andresenfredrik_128.jpg",
      "createdAt": 1619675068175,
      "updatedAt": 1619675068175
    },
    {
      "id": "ac9d3129-5bda-4012-b22f-e4570993ca32",
      "studentID": 98377,
      "name": "Geraldine Kub",
      "gender": "Male",
      "dayOfBirth": "Wed Jan 01 1997",
      "phoneNumber": "(736) 976-7458",
      "email": "Salvatore.Leannon51@gmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/petrangr_128.jpg",
      "createdAt": 1619675068175,
      "updatedAt": 1619675068175
    },
    {
      "id": "e36c7db4-a42c-40c6-8063-9d432ee4d284",
      "studentID": 13447,
      "name": "Francis Corkery",
      "gender": "Male",
      "dayOfBirth": "Wed Jan 01 1997",
      "phoneNumber": "(248) 477-1188",
      "email": "Avery5@yahoo.com",
      "avatar": "https://cdn.fakercloud.com/avatars/pcridesagain_128.jpg",
      "createdAt": 1619675068175,
      "updatedAt": 1619675068175
    },
    {
      "id": "00680b37-bd11-45a9-9c43-2e52f145751a",
      "studentID": 99773,
      "name": "Freddie Blick",
      "gender": "Male",
      "dayOfBirth": "Wed Jan 01 1997",
      "phoneNumber": "225.962.0364",
      "email": "Jessica77@gmail.com",
      "avatar": "https://cdn.fakercloud.com/avatars/manigm_128.jpg",
      "createdAt": 1619675068175,
      "updatedAt": 1619675068175
    }
  ])

  return (
    <div className="wrapper-main">
      <ul className="title-container">
        <li className="title check">
          <input type="checkbox" name="" />
        </li>
        <li className="title studentID">Student ID</li>
        <li className="title name">Name</li>
        <li className="title gender">Gender</li>
        <li className="title phoneNumber">Phone Number</li>
      </ul>

      <div className="student-container">
        {studentList.map(student =>
          <StudentList student={student} key={student.id} />
        )}
      </div>

      <div className="footer">
        <button className="trash">
          <span className="total">2</span>
          <i class="fas fa-trash"></i>
        </button>

        <div className="pagination">
          <div className="page">
            <span className="current">1</span> / <span className="total">10</span>
          </div>

          <div className="btn">
            <button className="prev">
              <i className="fas fa-long-arrow-alt-left"></i>
            </button>
            <button className="next">
              <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
};

export default IndexMain;