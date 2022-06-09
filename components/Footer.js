import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={footerStyles.container}>
        <div className={footerStyles.footer}>
            <div className={footerStyles.logo}>
                <span>Customer Point System</span>
            </div>
        </div>
        </div>
    )
}

export default Footer
