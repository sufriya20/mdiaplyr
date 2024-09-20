import React,{useState,useEffect} from 'react'
import { getCategoryApi ,deleteCategory, addvideoToCategory } from '../service/allAPI'
import VideoCard from './VideoCards'
import { toast } from 'react-toastify'


function CategorySet({res}) {

    const [clist,setClist]=useState([])
    const [resp,setResp]=useState({})

    useEffect(()=>{
        getData()
    },[res,resp])

    const getData=async()=>{
        const result=await getCategoryApi()
        if(result.status==200){
            setClist(result.data)
            console.log(result.data);
        }
    }
    const deleteCat=async(id)=>{
        const result=await deleteCategory(id)
        if(result.status==200){
            setResp(result)
        }
    }
    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("Draging over")
    }
    const handleDrop=async(e,cat)=>{
        console.log("Dropped!!")
        const video=JSON.parse(e.dataTransfer.getData('video'))
        console.log(video);
        cat.videos.push(video)
        const result=await addvideoToCategory(cat,cat.id)
        if(result.status==200){
            toast.success("video added To Category!!")
            getData()
        }
        else{
        console.error("Failed!!")
    }
}
  return (
    <>
    <div className='border shadow border-2 border-dark p-1'>
     {
        clist?.length>0 ?
        <div>
            {clist?.map(item=>(
                <div className='border w-100 border-2 p-2 shadow mb-3 'onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e,item)}>
                    <div className='d-flex justify-content-between'>
                     <h3>{item.category}</h3>
                     <button className='btn' onClick={()=>{deleteCat(item.id)}}>
                     <i className="fa-solid fa-trash" style={{color: "#0a0a0a"}} />
                     </button>
                    </div>
                 <div className='p-1 border'>
                    {
                    item.videos.length>0 &&
                    item.videos.map(item=>(
                        <VideoCard video={item} cond={true}/>
                    ))
                  } 
                 </div> 
                </div>
            ))}
        </div>
    :
    <h5 className='text-danger'>No Categories</h5>
     }
    </div>
    </>

  )
}

export default CategorySet