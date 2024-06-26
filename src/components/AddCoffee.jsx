import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee=(e)=>{
         e.preventDefault();
         const form=e.target;
         
         const name= form.name.value;
         const quantity= form.quantity.value;
         const supplier= form.supplier.value;
         const taste= form.taste.value;
         const category= form.category.value;
         const details= form.details.value;
         const photoUrl=form.photoUrl.value;
         
         const newCoffee= {name,quantity,supplier,taste,category,details,photoUrl};
         console.log(newCoffee);

         fetch('http://localhost:5005/coffee',{
            method:'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(newCoffee),
         })
         .then(res=>res.json())
         .then(data=>{
            console.log('From DB:',data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'A new coffee is added to the roaster',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                  })
            }
         })
         
    }


    return (
        <div className="bg-[#F4F3F0] p-2 md:p-24">
            <h1 className="text-3xl mb-4">Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>


                {/* form  row  name and quantity*/}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row supplier and taste */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row category and details */}
                <div className="md:flex mb-2 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>
                </div>

                {/* form row */}
                <div className="mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="w-full input input-bordered rounded-l-none" />
                        </label>
                    </div>

                </div>

                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Add coffee" />



            </form>
        </div>
    );
};

export default AddCoffee;