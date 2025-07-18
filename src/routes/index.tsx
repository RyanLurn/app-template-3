import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home
});

function Home() {
  return (
    <div className="bg-red-500 p-4 text-white">
      <Button>Button</Button>
    </div>
  );
}
