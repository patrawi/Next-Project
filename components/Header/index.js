
import Menu from "../Menu";

const Header = () => {
    return (
        <>
            <div style={{
                display : 'flex',
                justifyContent : 'space-between',
                alignItems : 'center',
                margin : '16px',
            }}>
                <div>ICON</div>
                <Menu />
            </div>
        </>
    )
}

export default Header;