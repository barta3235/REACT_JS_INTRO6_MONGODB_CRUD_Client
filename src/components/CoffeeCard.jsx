import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, setCoffees,coffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
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
                
                fetch(`http://localhost:5005/coffee/${_id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json',
                    },
                    body: JSON.stringify()
                })
                .then(res=> res.json())
                .then((data)=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee will be discontinued.",
                            icon: "success"
                        });
                    }

                    const remaining= coffees.filter((aCoffee)=>aCoffee._id !== _id);
                    setCoffees(remaining);
                })
            }
        });
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl p-4">
            <figure><img className="w-[160px] h-[230px] mr-5" src={photoUrl} alt="Movie" /></figure>
            <div className="flex items-center justify-center border w-full gap-[50px]">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-square btn-success join-item">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn btn-square btn-warning join-item">Edit</button></Link>
                        <button className="btn btn-square btn-error join-item" onClick={() => handleDelete(_id)}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;