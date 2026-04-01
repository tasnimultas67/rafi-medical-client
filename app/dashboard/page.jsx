"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Calendar,
  Users,
  Stethoscope,
  Heart,
  Pill,
  FileText,
  Settings,
  LogOut,
  Home,
  Bell,
  User,
  Clock,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Shield,
  Award,
  Syringe,
  Thermometer,
  Brain,
  Bone,
  Eye,
  Microscope,
  Ambulance,
  Plus,
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sidebar Components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // User Data
  const user = {
    name: "Dr. Sarah Rahman",
    role: "Senior Cardiologist",
    email: "sarah.rahman@rafimedical.com",
    phone: "+880 1XXX-XXXXXX",
    department: "Cardiology",
    experience: "12 years",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=300&fit=crop",
  };

  // Stats Data
  const stats = [
    {
      title: "Total Patients",
      value: "1,284",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Appointments",
      value: "156",
      change: "+8%",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Surgeries",
      value: "24",
      change: "+5%",
      icon: Stethoscope,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Recovery Rate",
      value: "98.5%",
      change: "+2%",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  // Recent Appointments
  const recentAppointments = [
    {
      id: 1,
      patient: "John Doe",
      age: 45,
      time: "09:00 AM",
      date: "2024-01-20",
      type: "Cardiology Checkup",
      status: "Confirmed",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
    {
      id: 2,
      patient: "Jane Smith",
      age: 32,
      time: "10:30 AM",
      date: "2024-01-20",
      type: "ECG Test",
      status: "In Progress",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
    },
    {
      id: 3,
      patient: "Robert Johnson",
      age: 58,
      time: "02:00 PM",
      date: "2024-01-20",
      type: "Blood Pressure Check",
      status: "Scheduled",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
    },
    {
      id: 4,
      patient: "Emily Davis",
      age: 28,
      time: "03:30 PM",
      date: "2024-01-20",
      type: "Consultation",
      status: "Confirmed",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
    },
  ];

  // Upcoming Schedule
  const upcomingSchedule = [
    {
      id: 1,
      title: "Cardiology Conference",
      date: "Jan 22, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Room A",
      type: "Conference",
    },
    {
      id: 2,
      title: "Patient Follow-up: John Doe",
      date: "Jan 23, 2024",
      time: "11:30 AM - 12:30 PM",
      location: "Room 304",
      type: "Meeting",
    },
    {
      id: 3,
      title: "Medical Research Meeting",
      date: "Jan 24, 2024",
      time: "02:00 PM - 04:00 PM",
      location: "Lab 2",
      type: "Research",
    },
  ];

  // Medical Reports
  const medicalReports = [
    {
      id: 1,
      patient: "John Doe",
      reportType: "ECG Report",
      date: "2024-01-15",
      status: "Completed",
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      patient: "Jane Smith",
      reportType: "Blood Test",
      date: "2024-01-14",
      status: "Pending",
      fileSize: "1.2 MB",
    },
    {
      id: 3,
      patient: "Robert Johnson",
      reportType: "MRI Scan",
      date: "2024-01-13",
      status: "Completed",
      fileSize: "5.7 MB",
    },
  ];

  // Health Metrics
  const healthMetrics = {
    bloodPressure: "120/80",
    heartRate: "72",
    oxygenLevel: "98%",
    bloodSugar: "95 mg/dL",
    cholesterol: "180 mg/dL",
    bmi: "22.5",
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
    { icon: Activity, label: "Overview", href: "#overview" },
    { icon: Calendar, label: "Appointments", href: "#appointments" },
    { icon: Users, label: "Patients", href: "#patients" },
    { icon: FileText, label: "Reports", href: "#reports" },
    { icon: Pill, label: "Prescriptions", href: "#prescriptions" },
    { icon: Settings, label: "Settings", href: "#settings" },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <span className="font-bold text-lg">Rafi Medical</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild isActive={item.active}>
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

            <Separator className="my-4" />

            <div className="px-3 py-2">
              <h3 className="mb-2 text-sm font-medium text-gray-500">
                Medical Departments
              </h3>
              <div className="space-y-1">
                {[
                  { name: "Cardiology", icon: Heart, patients: 234 },
                  { name: "Neurology", icon: Brain, patients: 156 },
                  { name: "Orthopedics", icon: Bone, patients: 189 },
                  { name: "Pediatrics", icon: Syringe, patients: 278 },
                  { name: "Ophthalmology", icon: Eye, patients: 145 },
                  { name: "Radiology", icon: Microscope, patients: 98 },
                ].map((dept, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <dept.icon size={16} className="text-blue-600" />
                      <span className="text-sm">{dept.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {dept.patients} patients
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.role}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LogOut size={16} />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold text-gray-900">
                  Doctor Dashboard
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail size={16} />
                  <span className="hidden sm:inline">Messages</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bell size={16} />
                  <span className="hidden sm:inline">Notifications</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-6">
            {/* Welcome Banner */}
            <div className="relative rounded-xl overflow-hidden mb-8">
              <Image
                src={user.coverImage}
                alt="Medical Center"
                width={1200}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center px-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Welcome back, Dr. Sarah!
                  </h2>
                  <p className="text-blue-100">
                    You have {stats[1].value} appointments scheduled for today
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-50 text-green-600"
                      >
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs Section */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="reports">Medical Reports</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Health Metrics */}
                  <Card className="lg:col-span-1">
                    <CardHeader>
                      <CardTitle className="text-lg">Health Metrics</CardTitle>
                      <CardDescription>
                        Your personal health statistics
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(healthMetrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="font-semibold text-gray-900">
                            {value}
                          </span>
                        </div>
                      ))}
                      <Separator />
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Health Score</span>
                          <span className="font-semibold">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Upcoming Schedule */}
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Upcoming Schedule
                      </CardTitle>
                      <CardDescription>
                        Your appointments and meetings
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {upcomingSchedule.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50"
                          >
                            <div className="p-2 bg-blue-50 rounded-lg">
                              <Calendar size={20} className="text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {item.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.date} • {item.time}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {item.location}
                              </p>
                            </div>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Appointments Table */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          Recent Appointments
                        </CardTitle>
                        <CardDescription>
                          Today's patient appointments
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        View All
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentAppointments.map((appointment) => (
                            <TableRow key={appointment.id}>
                              <TableCell className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={appointment.avatar} />
                                  <AvatarFallback>
                                    {appointment.patient.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">
                                    {appointment.patient}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Age: {appointment.age}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div>
                                  <p>{appointment.time}</p>
                                  <p className="text-xs text-gray-500">
                                    {appointment.date}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell>{appointment.type}</TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={
                                    appointment.status === "Confirmed"
                                      ? "bg-green-50 text-green-600 border-green-200"
                                      : appointment.status === "In Progress"
                                        ? "bg-blue-50 text-blue-600 border-blue-200"
                                        : "bg-yellow-50 text-yellow-600 border-yellow-200"
                                  }
                                >
                                  {appointment.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">
                                  View Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appointments Tab */}
              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <CardTitle>All Appointments</CardTitle>
                        <CardDescription>
                          Manage and view all patient appointments
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="gap-2">
                          <Plus size={16} />
                          New Appointment
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <div className="relative flex-1">
                        <Search
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <Input
                          placeholder="Search appointments..."
                          className="pl-9"
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Doctor</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentAppointments.map((appointment) => (
                          <TableRow key={appointment.id}>
                            <TableCell className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={appointment.avatar} />
                                <AvatarFallback>
                                  {appointment.patient.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">
                                  {appointment.patient}
                                </p>
                                <p className="text-xs text-gray-500">
                                  ID: PAT-{appointment.id}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div>
                                <p>{appointment.date}</p>
                                <p className="text-xs text-gray-500">
                                  {appointment.time}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>{appointment.type}</TableCell>
                            <TableCell>Dr. Sarah Rahman</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  appointment.status === "Confirmed"
                                    ? "bg-green-50 text-green-600 border-green-200"
                                    : appointment.status === "In Progress"
                                      ? "bg-blue-50 text-blue-600 border-blue-200"
                                      : "bg-yellow-50 text-yellow-600 border-yellow-200"
                                }
                              >
                                {appointment.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                <MoreVertical size={16} />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Medical Reports Tab */}
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Reports</CardTitle>
                    <CardDescription>
                      Access and manage patient medical reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Report Type</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>File Size</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {medicalReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell className="font-medium">
                              {report.patient}
                            </TableCell>
                            <TableCell>{report.reportType}</TableCell>
                            <TableCell>{report.date}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  report.status === "Completed"
                                    ? "bg-green-50 text-green-600 border-green-200"
                                    : "bg-yellow-50 text-yellow-600 border-yellow-200"
                                }
                              >
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{report.fileSize}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2"
                              >
                                <Download size={14} />
                                Download
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
