import s from './Layout.module.css';

const Layout = (props) => {
    
    let style = {};
    if(props.urlBg) style = {background: `url(${props.urlBg})`}
    if(props.colorBg) style = {background: props.colorBg}
    

    return (
        <section className={s.root} style={style}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{props.desc}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;