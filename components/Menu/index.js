import Link from "next/link";
const Menu = () => {
    return (
        <div style={{
            display : 'flex',
            justifyContent: 'center',
            gap : '16px',
            alignItems: 'center',
        }}> 
            <Link href = '/'>
                <a>Home</a>
            </Link>
            <Link href = '/about'>
                <a>About</a>
            </Link>
            <Link href = '/articles'>
                <a>Article</a>
            </Link>
            <Link href = '/contacts'>
                <a>Contacts</a>
            </Link>
        </div>
    )
}

export default Menu;