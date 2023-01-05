import { Link } from 'next/link';


function Footer() {
    return (
        <div className='' style={{ backgroundColor: '#77002e', color: '#fcb8d2', textAlign: 'center', padding: '1rem' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <p style={{ display: 'inline-block', textTransform: 'capitalize' }}>mead with ❤️ by</p>
            <a className='' target="_blank" href='https://github.com/AhmedNaderAmer/next.js-course-demo' style={{ textDecoration: 'none', color: '#fcb8d2', marginLeft: '0.5rem' }}>
                AhmedNaderAmer
            </a>
        </div >
    );
}

export default Footer;