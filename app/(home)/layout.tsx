// import Footer from "@/components/layout/Footer"
// import Topbar from "@/components/layout/Topbar"

// const HomeLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <Topbar />
//       {children}
//       <Footer/>
//     </>
//   )
// }

// export default HomeLayout


import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
