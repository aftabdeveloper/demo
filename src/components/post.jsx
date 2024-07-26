import { useEffect } from "react"

const Post = ({data,setPageNo})=>{
    //console.log(data)
    useEffect(()=>{
        const observer = new IntersectionObserver((param)=>{
            if(param[0].isIntersecting){
                observer.unobserve(lastmage)
                setPageNo((pageNo)=>pageNo+1)
            }
        })
        const lastmage = document.querySelector(".image_post:last-child")
        if(!lastmage) return;
        observer.observe(lastmage)
        return ()=>{
            if(lastmage){
                observer.unobserve(lastmage)
            }
            observer.disconnect()
        }
    },[data])
    return (
        <>
            <div className="container">
                {
                    data && data.map((item,index)=>{
                     return <img className="image_post" key={index} src={item.download_url} alt={item.author} />
                    })
                }
            </div>
        </>
    )
}

export default Post