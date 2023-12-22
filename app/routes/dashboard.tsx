import { Outlet } from "@remix-run/react";

export default function Dashboad() {
  return (
    <div>
      <h1>Hello from the dashboard layout</h1>
      <Outlet />
    </div>
  )
}
