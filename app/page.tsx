import Info from "@/components/Info";
import Profile from "@/components/Profile";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1">
      <Profile />
      <ScrollArea>
        <Info />
      </ScrollArea>
    </div>
  );
}
