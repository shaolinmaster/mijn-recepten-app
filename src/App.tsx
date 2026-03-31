import React from 'react'
import { Home, Plus, Calendar, User, Search, Heart, Clock, Users } from 'lucide-react'

// Mock data
const mockRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: '🍝',
    time: '20 min',
    servings: 4,
    difficulty: 'Easy',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Caesar Salad',
    image: '🥗',
    time: '15 min',
    servings: 2,
    difficulty: 'Very Easy',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Beef Tacos',
    image: '🌮',
    time: '25 min',
    servings: 4,
    difficulty: 'Medium',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Chocolate Cake',
    image: '🍰',
    time: '45 min',
    servings: 6,
    difficulty: 'Medium',
    rating: 4.9,
  },
]

const RecipeCard = ({ recipe }: { recipe: typeof mockRecipes[0] }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
    <div className="text-6xl bg-gradient-to-br from-orange-100 to-red-100 p-8 flex items-center justify-center">
      {recipe.image}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800">{recipe.name}</h3>
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        <Clock size={16} />
        <span>{recipe.time}</span>
        <span className="text-yellow-500">★ {recipe.rating}</span>
      </div>
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
        <Users size={16} />
        <span>{recipe.servings} servings</span>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-medium transition">
          View
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
          <Heart size={18} className="text-red-500" />
        </button>
      </div>
    </div>
  </div>
)

const HomePage = () => (
  <div className="space-y-6">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl">
      <h1 className="text-3xl font-bold mb-2">Welkom terug!</h1>
      <p className="text-orange-100">Ontdek vandaag's speciale recepten</p>
    </div>

    {/* Search */}
    <div className="relative">
      <input
        type="text"
        placeholder="Zoek recepten..."
        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <Search size={20} className="absolute left-3 top-3 text-gray-400" />
    </div>

    {/* Featured */}
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Populair Deze Week</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  </div>
)

const RecipesPage = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Mijn Recepten</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Zoek in je recepten..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Search size={20} className="absolute left-3 top-3 text-gray-400" />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {mockRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  </div>
)

const AddRecipePage = () => (
  <div className="space-y-6 max-w-2xl">
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl">
      <h1 className="text-3xl font-bold mb-2">Nieuw Recept</h1>
      <p className="text-orange-100">Voeg je favoriete recept toe</p>
    </div>

    <form className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Receptnaam
        </label>
        <input
          type="text"
          placeholder="Bijv. Spaghetti Carbonara"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bereidingstijd (min)
          </label>
          <input
            type="number"
            placeholder="20"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Aantal personen
          </label>
          <input
            type="number"
            placeholder="4"
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ingrediënten
        </label>
        <textarea
          placeholder="- 400g spaghetti&#10;- 200g pancetta&#10;- 4 eieren"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bereidingswijze
        </label>
        <textarea
          placeholder="Beschrijf de stappen..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-lg transition"
      >
        Recept Opslaan
      </button>
    </form>
  </div>
)

const PlannerPage = () => {
  const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']
  const meals = ['Ontbijt', 'Lunch', 'Diner']

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2">Weekplanner</h1>
        <p className="text-blue-100">Plan je week in met recepten</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-gray-600 font-semibold">Dag</th>
              {days.map((day) => (
                <th key={day} className="px-4 py-3 text-center text-gray-600 font-semibold">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4 font-medium text-gray-700">{meal}</td>
                {days.map((day) => (
                  <td key={day} className="px-4 py-4 text-center">
                    <div className="bg-orange-100 hover:bg-orange-200 text-orange-700 px-3 py-2 rounded-lg text-xs cursor-pointer transition">
                      +
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const ProfilePage = () => (
  <div className="space-y-6 max-w-2xl">
    {/* Profile Header */}
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className="text-6xl mb-4">👨‍🍳</div>
      <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
      <p className="text-gray-600">Receptenverzamelaar & Kookliefhebber</p>
      <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
        <div>
          <p className="font-bold text-orange-500">24</p>
          <p>Recepten</p>
        </div>
        <div>
          <p className="font-bold text-orange-500">156</p>
          <p>Favorieten</p>
        </div>
        <div>
          <p className="font-bold text-orange-500">12</p>
          <p>Volgers</p>
        </div>
      </div>
    </div>

    {/* Settings */}
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Instellingen</h2>
      
      <div className="border-b border-gray-200 pb-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-700">Notificaties</span>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </label>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-gray-700">Dark Mode</span>
          <input type="checkbox" className="w-5 h-5" />
        </label>
      </div>

      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition">
        Afmelden
      </button>
    </div>
  </div>
)

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'recipes' | 'add' | 'planner' | 'profile'>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'recipes':
        return <RecipesPage />
      case 'add':
        return <AddRecipePage />
      case 'planner':
        return <PlannerPage />
      case 'profile':
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex justify-around">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition ${
              currentPage === 'home' ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Home size={24} />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('recipes')}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition ${
              currentPage === 'recipes' ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Search size={24} />
            <span className="text-xs font-medium">Recepten</span>
          </button>
          <button
            onClick={() => setCurrentPage('add')}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition ${
              currentPage === 'add' ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Plus size={24} />
            <span className="text-xs font-medium">Toevoegen</span>
          </button>
          <button
            onClick={() => setCurrentPage('planner')}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition ${
              currentPage === 'planner' ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Calendar size={24} />
            <span className="text-xs font-medium">Planner</span>
          </button>
          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition ${
              currentPage === 'profile' ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <User size={24} />
            <span className="text-xs font-medium">Profiel</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
