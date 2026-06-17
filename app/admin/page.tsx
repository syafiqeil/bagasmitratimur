import { getSiteContent } from "@/app/actions/content";
import AdminForm from "./AdminForm";

export default async function AdminPage() {
  const data = await getSiteContent();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <AdminForm initialData={data} />
    </div>
  );
}
