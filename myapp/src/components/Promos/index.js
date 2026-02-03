import './index.css'

const Promos = (props) => {
    const { promoDetails } = props
    const { promoTitle, promoUrl } = promoDetails
    return (
        <div className="promo-container">
            <h1 className="promo-title">{promoTitle}</h1>
            <video className="promo-video" loop autoPlay controls muted>
                <source src={promoUrl} />
            </video>
            <div className="promo-badge">Promo</div>
        </div>
    )
}

export default Promos