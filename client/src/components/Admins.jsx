import React,{useState,useEffect} from 'react'
import axios from '../utils/axios';

const Admins = () => {
  const [admins ,setAdmins ] = useState([]);
  const [showForm,setShowForm] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [formData,setFormData] = useState({
    username: "",
    password: ""
  });

  useEffect(()=>{
fetchAdmins()
  },[])

  const fetchAdmins = async()=>{
    try {
      const respose = await axios.get('/admins')
      setAdmins(respose.data)
    } catch (error) {
      
    }
  }

  // Handle Submit admins
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      if(editingAdmin){
        await axios.put(`/admins/${editingAdmin.id}`,formData)
      }else{
        await axios.post('/admins',formData)
      }
      setFormData({
        username:'',
        password:''
      
      })
      setShowForm(false)
      setEditingAdmin(null)
      fetchAdmins();
    } catch (error) {
      
    }
  }


  // Delete Admins
  const handleDelete = async(e)=>{
    if(window.confirm('Are you sure you want to delete this admin')){
     try {
      await axios.delete(`/Admins,${id}`)
      fetchAdmins();
     } catch (error) {
      
     }   
    }
  }
  return (
   <>
    <div className='max-w-4xl space-y-6'>
      <div className="flex justify-between items-center">
        <h2 className="text2xl font-bold text-gray-900">Administrators</h2>
        <button className="btn-primary flex items-center" onClick={()=>setShowForm(!showForm)}>Add Admin</button>
      </div>

      {/* Total Admins Card */}
      <div className="max-w-sm bg-purple-50 rouned-lg shadow-sm border border-purple-200">
        <div className="px-6 py-5">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 bg-purple-100 rounded-full p-3">
              {/* Icons */}
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-medium text-purple 800">
                Total Admins
              </h3>
              <div className="mt-1 text-3xl font-semibold text-purple-900">
                {admins.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        showForm && (
          <div className='max-2xl'>
            <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md space-y-4'>
              <div className="grid grid-cols-1 gap-4">
                <input type="text" placeholder='Username' className='form-input' value={formData.username} onChange={(e)=>setFormData({...formData, username: e.target.value})} />
                <input type="password" placeholder='***********' className='form-input' value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
              </div>
              <div className="flex justify-end space-x-2">
                <button type='button' onClick={()=> setShowForm(false)} className='btn-ghost'>cancel</button>
                <button type='submit' className='btn-primary'> {editingAdmin ? 'update Admin': 'save admin'}</button>
              </div>
            </form>
          </div>
        )
      }
    </div>
   </>
  )
}

export default Admins