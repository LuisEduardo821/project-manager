import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-2">
      <Button size="xs">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
      <Input />
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="teritary">Teritrary</Button>
    </div>
  );
}
