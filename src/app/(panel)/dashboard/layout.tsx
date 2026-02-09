import { SidebarDashboard } from "./_components/sibebar";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <>
      <SidebarDashboard>
      {children}
      </SidebarDashboard>
    </>
  )


}