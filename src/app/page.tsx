 import React from "react";
  import Card from "@/app/Cmponents/Card";
 

//props
export default function Home() {

      const students =[
       {name:'Shan',age:6 ,rollno:'S1234',studentClass:'3rd Grade', },
       {name:'Nabeel', age:8 ,rollno:'S1235' ,studentClass:'5th Grade', },
       {name:'Burhan',age:10 ,rollno:'S1236',studentClass:'6th Grade' ,},
       {name:'Ali', age: 5 ,rollno:'S1237' ,studentClass:'2nd Grade',},
      ];
return (
    <div className="flex flex-col items-center mt-10">               
      <h1 className="text-3xl font-bold mb-6">Student ID Card</h1>

        {students.map((student, index) => (
          < Card
            key={index}
            name={student.name}
            age={student.age}
            rollNo={student.rollno}
            studentClass={student.studentClass}
          />
        ))}
      </div>
  );
};

