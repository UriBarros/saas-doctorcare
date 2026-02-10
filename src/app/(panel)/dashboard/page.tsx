import getSession from "@/lib/getSession"
import { redirect } from "next/navigation"


export default async function Dashboard() {
  const session = await getSession();

  if(!session){
    redirect("/");
  
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">This is your dashboard where you can manage your activities.</p>

      <div className="w-full h-150 bg-gray-200"></div>
      <div className="w-full h-150 bg-gray-200"></div>
      <div className="w-full h-150 bg-gray-200"></div>
    </div>
  )
}