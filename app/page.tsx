import Info from "@/components/Info";
import Profile from "@/components/Profile";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 min-h-screen">
      <Profile />

      <div className="lg:h-screen">
        <div className="block lg:hidden">
          <Info />
        </div>

        <div className="hidden lg:block h-full">
          <ScrollArea className="h-full px-6">
            <Info />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
