import Footer from "@app/components/orgonizims/navbars/footer/Footer"
import Header from "@app/components/orgonizims/navbars/header/Header"
import PersonSitebar from "@app/components/orgonizims/sitebars/PersonSitebar"
import ProjectSitebar from "@app/components/orgonizims/sitebars/ProjectSitebar"

export default function Layout ({children}:{children:React.ReactNode;}) {

    return (
        <div className="grid h-screen grid-cols-1">
            <Header/>
            <main className="flex">
                <PersonSitebar/>
                {children}
                <ProjectSitebar/>
            </main>
            <Footer/>
        </div>
    )
}