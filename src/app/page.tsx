import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold">Kirana Stock Manager</h1>
        <p className="text-lg text-muted-foreground max-w-md">
          Manage your store's inventory, track expiring items, and prevent wastage with our easy-to-use tool.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/login">
            <Button size="lg">Login to Store</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="lg">Go to Dashboard (Dev)</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
