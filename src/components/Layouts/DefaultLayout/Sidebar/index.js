import { Link } from "react-router-dom";




const Sidebar = () => {

    return (
        <div>
            <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                <li style={{color: 'salmon'}}>
                    <Link to='/'>Trang Home</Link>
                </li>
                <li style={{color: 'salmon'}}>
                    <Link to='/cartpage'>Trang Cart</Link>
                </li>
                <li style={{color: 'salmon'}}>
                <Link to='/detailpage'>Trang Detail</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;