import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useState } from 'react';
const Navbar = (props) => {
    const navLinks = [
        { name: 'HOME', dest: '' },
        { name: 'COMMITTEES', dest: '' },
        { name: 'TEAM', dest: '' },
        { name: 'CONTACT', dest: '' },
        { name: 'FAQ', dest: '' }
    ];
    const [navpos, setNavpos] = useState('150%');
    const [navtrans, setNavtrans] = useState('0');
    const menuClick = () => {
        navpos === '150%' ? setNavpos('0%') : setNavpos('150%');
        navtrans === '0' ? setNavtrans('1') : setNavtrans('0');
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <img onClick={menuClick} src={navpos === '150%' ? 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg' : 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg'} className={styles.menuBtn} />
            </div>
            <div className={styles.mobileNav} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '2rem', rowGap: '1rem', transform: `translateX(${navpos})`, opacity: `${navtrans}` }}>
                {navLinks.map((item) => <Link to={item.dest} style={{ textDecoration: 'none' }}>{item.name}</Link>)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.deskNav} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: '6rem', paddingBottom: '1rem', paddingTop: '1rem', padding: '1rem' }}>
                    {navLinks.map((item) => <Link to={item.dest} style={{ textDecoration: 'none' }}>{item.name}</Link>)}
                </div>
            </div>
        </div>
    );
}
export default Navbar;