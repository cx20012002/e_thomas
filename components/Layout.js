import {Sora} from "@next/font/google";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const sora = Sora({
    subsets: ['latin'],
    variable: '---font-sora',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const Layout = ({children}) => {
    return (
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}>
            <TopLeftImg/>
            <Nav/>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
