import './SelectionProduct.css';
function SelectionProduct (prpos) {
   
    return(
        <div className='child4'>
            <img  className='Product'  src={prpos.image} />
            <h2>{prpos.title}</h2>
            <label>{prpos.price}</label>
            <label>{prpos.category}</label>

            <div className='childbtn'>
            <button className='btnhover'>More Details</button>
            </div>
           
          
        </div>
    )
    
}
export default SelectionProduct