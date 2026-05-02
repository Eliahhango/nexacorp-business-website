'use client'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { services } from '@/lib/services'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { 
  User, 
  Settings, 
  CreditCard, 
  FileText, 
  Bell, 
  LogOut,
  ArrowRight,
  Calendar,
  DollarSign,
  Activity
} from 'lucide-react'

export default function DashboardPage() {
  const { data: session } = useSession()

  const mockProjects = [
    {
      id: '1',
      name: 'WhatsApp Bot for E-commerce',
      service: 'WhatsApp Bot Deployments',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-04-15'
    },
    {
      id: '2',
      name: 'Corporate Website Redesign',
      service: 'Web Development',
      status: 'completed',
      progress: 100,
      dueDate: '2024-03-20'
    },
    {
      id: '3',
      name: 'Brand Identity Package',
      service: 'Graphics Design',
      status: 'pending',
      progress: 0,
      dueDate: '2024-05-01'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>
      case 'in-progress':
        return <Badge variant="warning">In Progress</Badge>
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-heading font-bold text-text-primary">NexaCorp</span>
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-text-muted">Welcome back, {session?.user?.name || 'User'}!</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => signOut()}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{session?.user?.name}</h3>
                  <p className="text-sm text-text-muted">{session?.user?.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 bg-accent/10 text-accent rounded-lg">
                  <Activity className="w-5 h-5" />
                  <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-muted hover:bg-gray-50 rounded-lg">
                  <FileText className="w-5 h-5" />
                  <span>Projects</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-muted hover:bg-gray-50 rounded-lg">
                  <CreditCard className="w-5 h-5" />
                  <span>Billing</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-muted hover:bg-gray-50 rounded-lg">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 text-text-muted hover:bg-gray-50 rounded-lg">
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-muted">Active Projects</p>
                    <p className="text-3xl font-bold text-text-primary">2</p>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-muted">Total Spent</p>
                    <p className="text-3xl font-bold text-text-primary">$8,497</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-muted">Next Deadline</p>
                    <p className="text-3xl font-bold text-text-primary">3d</p>
                  </div>
                  <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-highlight" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-heading font-semibold text-text-primary">Recent Projects</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {mockProjects.map((project) => (
                    <div key={project.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-text-primary mb-1">{project.name}</h3>
                          <p className="text-sm text-text-muted">{project.service}</p>
                        </div>
                        {getStatusBadge(project.status)}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex-1 mr-4">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-text-muted">Progress</span>
                            <span className="text-sm font-medium text-text-primary">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-accent h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-text-muted">Due Date</p>
                          <p className="text-sm font-medium text-text-primary">{project.dueDate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-xl font-heading font-semibold text-text-primary">Start a New Project</h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.slice(0, 3).map((service) => {
                    const Icon = require('lucide-react')[service.icon]
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="border border-gray-100 rounded-lg p-4 hover:shadow-sm hover:border-accent/20 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                        </div>
                        <h3 className="font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-text-muted">
                          {service.shortDescription.slice(0, 80)}...
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}