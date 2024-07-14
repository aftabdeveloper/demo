const Paginate = ({pageNo,setPageNo})=>{

    const prevThreeNo = Array.from({length:3},(_,index)=>pageNo-index-1).filter(value=>value > 0).reverse()
    const nextFourNo = Array.from({length:4},(_,index)=>(pageNo+index))
    const finalArr = [...prevThreeNo,...nextFourNo]
    
    const handlePrev  = ()=>{
        setPageNo(pageNo-1)
    }

    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }
    return (
        <>
        <div className="pagination">
                {
                    pageNo > 1 ? <div className="page_btn" onClick={handlePrev}>{"<"}</div> : ""

                }
                {
                    finalArr.map((item,index)=>{
                        return <div key={index} className={item === pageNo ? 'active page_btn': 'page_btn'} onClick={()=>setPageNo(item)} style={{cursor: "pointer"}}>{item}</div>
                    })
                }
                <div className="page_btn" onClick={handleNext}>{">"}</div>
               </div>
        </>
    )
}

export default Paginate