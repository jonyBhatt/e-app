import { Home, Settings, UserRoundSearch, UsersRound } from 'lucide-react'
import React from 'react'
import { useLocation, Link } from 'react-router'

const pwaNavLinks = [
  { label: "হোম", href: "/", icon: Home },
  { label: "স্লিপ", href: "/slip", icon: UsersRound },
  { label: "অনুসন্ধান", href: "/search", icon: UserRoundSearch },
  { label: "সেটিংস", href: "/settings", icon: Settings },
]

export const PwaNavbar = () => {
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/"
    }
    return location.pathname.startsWith(href)
  }

  return (
    <nav className=' px-4 bg-white fixed bottom-0 left-0 right-0 shadow-t z-10 shadow-2xl'>
      <div className='flex justify-between items-center gap-4'>
        {pwaNavLinks.map((link) => {
          const Icon = link.icon
          const active = isActive(link.href)
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`flex flex-col items-center justify-center gap-2 flex-1 py-2 border-t-4 transition-colors ${
                active
                  ? 'border-t-blue-600 text-blue-600'
                  : 'border-t-transparent text-gray-600'
              }`}
            >
              <Icon size={22} />
              <span className='text-sm'>{link.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
