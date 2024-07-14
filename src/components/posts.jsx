import axios from "axios"
import { useEffect, useState } from "react"
import Paginate from "./paginate"
const Post = ()=>{
    const [posts,setPosts]  = useState([])
    const [pageNo,setPageNo] = useState(7)
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const {data} = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
            console.log(data)
            setPosts(data)
        }
        fetchData()
    },[pageNo])


    return (
        <>
            <div className='container'>
                {
                    posts.map((item,index)=>{
                        return <img 
                        key={index}
                        src={item.download_url}
                        alt={item.author}
                   />
                    })
                }
                <Paginate pageNo={pageNo} setPageNo={setPageNo} />
            </div>       
        </>
    )
}

export default Post