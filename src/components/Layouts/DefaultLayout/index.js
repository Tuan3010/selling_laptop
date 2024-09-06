import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({children}) => {
    return (
        <>
            <Header />
                <div className="main-content" style={{paddingTop: '100px'}}>
                    {children}
                </div>
            <Footer />
        </>
    );
};

export default DefaultLayout;