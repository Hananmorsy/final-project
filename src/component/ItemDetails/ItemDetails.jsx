import'./ItemDetails.css'
function ItemDetails(prpos) {
    return(
        <div>
            <div className="oneProduct">
                <div className="pic">
                <img  id='Product1'  src={prpos.image} />
                </div>
                <div className='det2'>
                    <h1>{prpos.title}</h1>
                    <label>{prpos.price}</label>
                </div>
            </div>
            <div>{prpos.description}</div>
        </div>
    )

    
}
export default ItemDetails