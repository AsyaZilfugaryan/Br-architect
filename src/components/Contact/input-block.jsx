import ProductTitles from '../product title/product_title'
import './input-block.scss'
import contactImg from '../../assets/images/main/map.jpg'


function ContactBlock() {
    return (
        <div >
            <ProductTitles title={'Contact'} text={'Lets get in touch and talk about your next project.'} />
            <div className='input-block'>
                <input type="text" className='contact-input' placeholder='Name' />
                <input type="text" className='contact-input' placeholder='E-mail' />
                <input type="text" className='contact-input' placeholder='Subject' />
                <input type="text" className='contact-input' placeholder='Comment' />
                <button className='button'>Send MEssage</button>
                <div className='map'>
                    <img src={contactImg} width={"100%"} height={'100%'} alt="" />
                </div>
            </div>
        </div>
    )
}
export default ContactBlock