import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Users2 = () => {

    const {isPending,isError,error,data:users}= useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res= await fetch('http://localhost:5005/user');
            return res.json()
        }
    })



    // const [users,setUsers]=useState([]);

    // useEffect(()=>{
    //      fetch('http://localhost:5005/user')
    //      .then(res=>res.json())
    //      .then(data=> setUsers(data))
    // },[])


    if(isPending){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(isError){
        return <p>{error.message}</p>
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:5005/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Deleted SUccessfully')
                    // const remaining= users.filter((user)=>user._id!==id);
                    // setUsers(remaining);  
                }
            })



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
                        users.map((user) => <tr key={user._id}>
                            <th>2</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-square">X</button>
                            </td>
                        </tr>
                        )}

                </tbody>
            </table>
        </div>
    );
};

export default Users2;