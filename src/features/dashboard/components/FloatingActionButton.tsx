import { Plus } from 'lucide-react'

export function FloatingActionButton() {
  return (
    <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center group hover:scale-110 active:scale-95 transition-all z-50">
      <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform" />
    </button>
  )
}
