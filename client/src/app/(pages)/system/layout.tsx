import Footer from "@organisms/navbars/footer/Footer";
import Header from "@organisms/navbars/header/Header";
import PersonSitebar from "@organisms/sitebars/PersonSitebar";
import ProjectSitebar from "@organisms/sitebars/ProjectSitebar";
import Frame from "@molecules/additional/Frame";

export default function Layout ({children}:{children:React.ReactNode;}) {
    return (
        <>
            <Header/>
            <main className="main">
                <PersonSitebar/>
                <div className="flex-grow p-[42px] border border-solid border-white/15 relative">
                    {children}
                    <Frame />
                </div>
                <ProjectSitebar/>
            </main>
            <Footer/>
        </>
    )
}