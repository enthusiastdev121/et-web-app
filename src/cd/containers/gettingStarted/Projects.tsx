import Interest from 'cd/components/InterestSelection/Interest';
import React, { useEffect, useState } from 'react'
function Projects({auth}:any) {
  const [data, setData] = useState();

  
  // useEffect(() =>{
  //   const projectID = checkProject.filter((i:any) => i.id).map((i2:any) => ({category_id:i2.id, subcategory_id: i2.sub.map((k:any) => k.id)}))
  //   console.log("projectID",projectID)
  // },[checkProject])

  useEffect(()=>{
    auth(data)
  },[data])
  
  console.log('----data-----',data)
  return (
    <div>
      <Interest
      authh={(e:any)=>{setData(e)}}
      />
    </div>
  )
}

export default Projects
