export default function Dashboard() {
    return (
      <div className="bg-[var(--secondary-background)] text-white min-h-screen p-6 w-full"> 
        <h1 className="text-md font-medium mb-1">Dashboard</h1>
        <p className="text-sm text-gray-400">Welcome to your dashboard. Here's an overview of your activity.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[var(--secondary-background)] shadow rounded-lg p-4">
            <h2 className="text-sm font-medium mb-2">Total Users</h2>
            <p className="text-xl font-medium">1,234</p>
          </div>
          <div className="bg-[var(--secondary-background)] shadow rounded-md p-4">
            <h2 className="text-sm font-medium mb-2">Revenue</h2>
            <p className="text-xl font-medium">$5,678</p>
          </div>
          <div className="bg-[var(--secondary-background)] shadow rounded-md p-4">
            <h2 className="text-sm font-medium mb-2">Active Projects</h2>
            <p className="text-xl font-medium">42</p>
          </div>
        </div>
      </div>
    )
  }