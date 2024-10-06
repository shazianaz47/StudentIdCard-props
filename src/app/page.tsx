 import React from "react"
  import Card from "./card/page";
 

//props
export default function Home() {

      const student =[
       {name:'Shan',age:6 ,rollno:'S1234',class:'3rd Grade', },
       {name:'Nabeel', age:8 ,rollno:'S1235' ,class:'5th Grade', },
       {name:'Burhan',age:10 ,rollno:'S1236',class:'6th Grade' ,},
       {name:'Ali', age: 5 ,rollno:'S1237' ,class:'2nd Grade',},
      ];
return (
    <div className="flex flex-col items-center mt-10">               
      <h1 className="text-3xl font-bold mb-6">Student ID Card</h1>

        {student.map((student,index) => (
          < Card
            key={index}
            name={student.name}
            age={student.age}
            rollNo={student.rollno}
            Class={student.class}
            // image={student.image}
          />
        ))}
      </div>
    
  );
};

