import {
  Image as ImageIcon,
  Users,
  FileText,
  BarChart3,
  Calendar,
} from "lucide-react";

export default function AdminDashboard() {
  // Швидкі дії
  const quickActions = [
    {
      title: "Банери",
      description: "Керування банерами сайту",
      icon: ImageIcon,
      href: "/admin/banners",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Користувачі",
      description: "Управління користувачами",
      icon: Users,
      href: "/admin/users",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Контент",
      description: "Публікації та статті",
      icon: FileText,
      href: "/admin/content",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Аналітика",
      description: "Статистика та звіти",
      icon: BarChart3,
      href: "/admin/analytics",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Панель управління
          </h1>
          <p className="text-slate-600 flex items-center gap-2">
            <Calendar size={16} />
            {new Date().toLocaleDateString("uk-UA", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        {/* Швидкі дії */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <a
                  key={index}
                  href={action.href}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex p-4 rounded-xl ${action.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={action.textColor} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{action.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
