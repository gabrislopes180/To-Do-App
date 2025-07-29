import Mood from "../components/mood";

export default function Choose() {
  return (
    <>
      <div className="bg-[url('/public/bg.png')] bg-cover bg-center h-screen">
        <div className="flex justify-center py-10">
          <Mood />
        </div>
      </div>
    </>
  );
}
