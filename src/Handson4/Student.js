import React from "react";
import { useState } from "react";
const Student=()=>{
const [data]=useState([

    {
        Name:'Mahesh',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    },
    {
        Name:'Mahesh',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    },
    {
        Name:'Venkat',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    },
    {
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    }
    ,
    {
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    },
    {
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    },
    {
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    }
    ,{
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    }
    ,
    {
        Name:'Ajay',
        Age:20,
        Course:'MERN',
        Batch:'march',
        Change:'Edit'
    }
]
);

    return (
        <div>
      <div id='firstLine'>
      <h1>Student Details</h1>
      <h1><button id='add'>Add New Student</button></h1>
      </div>
       <table border={1}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
        {
        data.map((item,index)=>{
            return (
             <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td style={{color:'blue',textDecoration:'underline'}}>{item.Change}</td>
                
             </tr>   
            )
        })
        }
       </table>
        </div>

       
    )
}
export default Student;
