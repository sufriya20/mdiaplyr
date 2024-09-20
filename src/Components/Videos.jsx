import React,{useEffect,useState} from 'react'
import VideoCards from './VideoCards'
import { getVideoApi } from '../service/allAPI'

function Videos({result}) {

  const[data,setData]=useState([])
  const[resp,setResp]=useState([])

  useEffect(()=>{
      getData()
  },[result,resp])

  const getData=async()=>{
    const result=await getVideoApi()
    console.log(result)
    if(result.status==200){
      setData(result.data)
    }
  }
  return (
    <>
    <div className='container-fluid border border-3 border-dark shadow p-3'>
      {
        data?.length>0 ?
        <div className='row p-2 justify-content-around'>
          {data?.map(item=>(
            <VideoCards video={item} res={setResp}/>
          ))}
        </div>
        :
        <h4 className='text-danger text-center'>No Videos Available!!</h4>
      }
    
    </div>
    </>
  )
}

export default Videos