import Header from './Header.jsx'
import ProductGallery from './ProductGallery.jsx';
import './Item.css'
import Payment from './Payment.jsx'

function Item({ product_name="Item Title" , price = "1000" , item_description = "NaN" }) {
    let item_description1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    const itemImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg"
    ];
    return (
        <>
        <Header/>
        {
            <div className='container'>
                <div className='item-preview'>
                    <ProductGallery images={itemImages} className="product-gallery" />
                    <div className='payment'>
                        <h3>{product_name}</h3>
                        <p>{item_description1}</p>
                        <p>₱{price}</p>
                        <Payment amount={price}/>
                    </div>
                </div>
                <div className='description'>
                    <p>{item_description1}</p>
                </div>
            </div>
        }
        </>
    )
}

export default Item;