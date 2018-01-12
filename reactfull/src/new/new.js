
import React, { Component } from 'react';
import './new.css';
import SideBar from '../sidebar/sidebar';



class New extends Component{
constructor(){

super();
 
 this.state=[
     {
        Name:'Ayushi',
        Phone:'9929226963',
        Email:'dharawatayushi@gmail.com',
        Purpose:'birthday invitation'
    },
     {
        Name:'Gaurav',
        Phone:'88775765765',
        Email:'gash@gmail.com',
        Purpose:'meeting'
    },
     {
        Name:'Megha',
        Phone:'9987757646',
        Email:'megha@gmail.com',
        Purpose:'kam hai kuch'
    },
     {
        Name:'Deeksha',
        Phone:'7785e65e65e',
        Email:'deeksha@gmail.com',
        Purpose:'marriage'
   

     },
     {

          Name:'Abhishek',
        Phone:'998y8747654',
        Email:'abhi@gmail.com',
        Purpose:'party'
   
     }
 ]

}
render() {
    return (
        <div className="container">
        <div class="card card-cascade narrower mt-5">

   
    <div class="view gradient-card-header purple-gradient narrower py-4 mx-4 mb-3 d-flex justify-content-center align-items-center">

       
    </div>
    

    <div class="px-4">

        
        <table class="table table-hover table-responsive mb-0 table-bordered">

            
            <thead >
                <tr >
                    <th scope="row">S.NO</th>
                    <th className="th-lg"> Name <i class="fa fa-sort ml-1"></i></th>
                    <th class="th-lg">Phone<i class="fa fa-sort ml-1"></i></th>
                    <th class="th-lg" style={{width:"30%"}}>Email<i class="fa fa-sort ml-1"></i></th>
                    <th class="th-lg">Purpose<i class="fa fa-sort ml-1"></i></th> 
                </tr>
            </thead>
           
            <tbody  >
                {this.state.map( (data, index) => 
                <tr>
                    <td>{index+1}</td>
                    <td>{data.Name}</td>
                    <td>{data.Phone}</td>
                    <td>{data.Email}</td>
                    <td>{data.Purpose}</td>
                </tr> 
                )}
            </tbody>
           
        </table>

    </div>

      <div class="d-flex justify-content-center">

      <nav class="my-4 pt-2">
            <ul class="pagination pagination-circle pg-purple mb-0">

             

             
                <li class="page-item disabled">
                    <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>

               
                <li class="page-item active"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">3</a></li>
                <li class="page-item"><a class="page-link">4</a></li>
                <li class="page-item"><a class="page-link">5</a></li>

                
                <li class="page-item">
                    <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>

             
            </ul>
        </nav>
        

    </div>
    

</div>
</div>
    )         
           
}
};
export default New;