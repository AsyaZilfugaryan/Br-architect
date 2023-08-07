import './product_title.scss'

function ProductTitles(props) {
    return (
        <div className='p-title'>
            <h2 className='blocks-title'>{props.title}</h2>
            <p className='blocks-text'>{props.text}</p>
        </div>
    )
}
export default ProductTitles