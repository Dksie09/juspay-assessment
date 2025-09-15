import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* eCommerce dashboard */}
      <main className="p-3 h-screen max-w-[1000px] mx-auto">
        <h1 className="py-2 px-1 font-semibold text-sm text-foreground">eCommerce</h1>
          <Dashboard/>
      </main>
    </div>
  );
}
