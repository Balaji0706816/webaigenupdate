import Sidebar from "@/components/layout/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]">
      <Sidebar />
      <main className="px-6 py-10">{children}</main>
    </div>
  );
}
