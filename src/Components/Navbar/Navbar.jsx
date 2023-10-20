import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useState } from 'react';
const Navbar = (props) => {
    const navLinks = [
        { name: 'HOME', dest: '/' },
        { name: 'COMMITTEES', dest: '' },
        { name: 'TEAM', dest: '/team' },
        { name: 'CONTACT', dest: '' },
        { name: 'FAQ', dest: '' }
    ];
    const events = [{ name: 'EVENT1', dest: '' }, { name: 'EVENT2', dest: '' }, { name: 'EVENT3', dest: '' }];
    const [navpos, setNavpos] = useState('0%');
    const [navtrans, setNavtrans] = useState('0');
    const menuClick = () => {
        navpos === '0%' ? setNavpos('80%') : setNavpos('0%');
        navtrans === '0' ? setNavtrans('1') : setNavtrans('0');
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <img onClick={menuClick} src={navpos === '0%' ? 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695653029/nitsmun/Group_2062_knm91j.svg' : 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695653265/nitsmun/xmark-solid_bd3own.svg'} className={styles.menuBtn} />
            </div>
            <div className={styles.mobileNav} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '2rem', rowGap: '1rem', width: `${navpos}`, opacity: `${navtrans}` }}>
                {navLinks.map((item) => <Link to={item.dest} style={{ textDecoration: 'none' }}>{item.name}</Link>)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.deskNav} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: '6rem', paddingBottom: '1rem', paddingTop: '1rem', padding: '1rem' }}>
                    {navLinks.map((item) => <Link to={item.dest} style={{ textDecoration: 'none', color: props.active === 'home' ? '#ffffff' : '#000000' }}>{item.name}</Link>)}
                    <select>
                        EVENTS
                        {events.map((item) => <option><Link to={item.dest}>{item.name}</Link></option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}
export default Navbar;