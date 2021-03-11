import s from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <h3 className={s.title}>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
}

export default Footer;