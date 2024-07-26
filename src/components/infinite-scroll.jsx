import { 
    useState,
    useEffect
} from "react"
import axios from "axios"
import Post from "./post"
const Index = ()=>{
    const[posts,setPosts] = useState([])
    const [pageNo,setPageNo] = useState(1)
    useEffect(()=>{
        const getData = async()=>{
         const {data} = await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
         setPosts((oldDta)=>[...oldDta,...data])
        }
        getData()
    },[pageNo])
    return (
        <>
            <Post data={posts} setPageNo={setPageNo}/>
        </>
    )
}

export default Index