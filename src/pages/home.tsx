import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/public/bg.png')] bg-cover bg-center h-screen">
        <div className=" flex justify-center">
          <Header />
        </div>
        <Main />
      </div>
    </>
  );
}
