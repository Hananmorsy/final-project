import './SeclectionItem.css';

function SeclectionItem (prpos) {
    return(
        <div className='child1'>
            <img  className='catelogo'  src={prpos.selectionLogo} />
            <h3>{prpos. category}</h3>
        </div>
    )
    
}
export default SeclectionItem