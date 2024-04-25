import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users,setUsers]=useState(loadedUsers);


    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5005/user/${id}`,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    const remaining= users.filter((user)=>user._id!==id);
                    setUsers(remaining);  
                }
              })


              
            }
          });
    }


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Logged at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user)=>  <tr key={user._id}>
                        <th>2</th>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.lastLoggedAt}</td>
                        <td>
                            <button onClick={()=>handleDelete(user._id)} className="btn btn-square">X</button>
                        </td>
                      </tr>
                      )}
                  
                </tbody>
            </table>
        </div>
    );
};

export default Users;