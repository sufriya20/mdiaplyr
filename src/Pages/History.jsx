import React ,{useEffect,useState} from 'react'
import { getHistoryApi,deleteHistoryApi } from '../service/allAPI'



function History() {
  const[historyList,setHistoryList]=useState([])
  const [resp,setResp]=useState([])
  useEffect(()=>{
    getData()
  },[resp])

  const getData=async()=>{
    const result=await getHistoryApi()
    if(result.status==200){
      setHistoryList(result.data)
      console.log(result.data)
    }
  }
  const deleteHist=async(id)=>{

    const result=await deleteHistoryApi(id)
    if(result.stat==200){
      setResp(result)
    }
  }
  return (
    <>
    <h2>Watch History</h2>
    
   {
     historyList?.length>0?
     
    <table className='table table-dark'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Video URL</th>
        <th>Date and Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
      {
        historyList.map(item=>(
      <tr>
      <td>{item.vid}</td>
      <td>{item.title}</td>
      <td>{item.url}</td>
      <td>{item.date}</td>
      <td>
        <button className='btn' onClick={()=>{deleteHist(item.id)}}>
        <i className="fa-solid fa-trash" style={{color: "#fafafa",}} />

        </button>
      </td>
      </tr>
      ))
}
    </tbody>
    </table>

    :
    <h3>NO History!!</h3>
  
  }
    </>
  )
}

export default History