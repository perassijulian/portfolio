import ContentPanel from "@/components/ContentPanel";
import ProfilePanel from "@/components/ProfilePanel";

export default function Home() {
  return (
    <div className="min-h-screen h-[100dvh] w-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <ProfilePanel />
      </div>
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <ContentPanel />
      </div>
    </div>
  );
}
