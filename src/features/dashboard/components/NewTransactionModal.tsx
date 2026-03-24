import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTransactionStore, Transaction } from '@/store/transactionStore'

interface NewTransactionModalProps {
  onClose: () => void
}

export function NewTransactionModal({ onClose }: NewTransactionModalProps) {
  const addTransaction = useTransactionStore((state) => state.addTransaction)

  const [formData, setFormData] = useState({
    recipient: '',
    category: 'Infrastructure',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    paymentMethod: 'Bank Transfer' as Transaction['paymentMethod'],
    status: 'pending' as Transaction['status']
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const initials = formData.recipient
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

    const amount = parseFloat(formData.amount)
    const isIncome = formData.category === 'Revenue'

    const newTransaction: Transaction = {
      id: `TXN-${Date.now()}`,
      recipient: formData.recipient,
      initials,
      category: formData.category,
      status: formData.status,
      amount: isIncome ? Math.abs(amount) : -Math.abs(amount),
      date: new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      time: formData.time,
      paymentMethod: formData.paymentMethod,
      approvedBy: formData.status === 'completed' ? 'You' : 'Pending',
      approverInitials: formData.status === 'completed' ? 'YO' : 'PD'
    }

    addTransaction(newTransaction)
    onClose()
  }

  const categories = ['Infrastructure', 'Payment Gateway', 'Software', 'Revenue', 'SaaS']
  const paymentMethods: Transaction['paymentMethod'][] = ['Credit Card', 'Bank Transfer', 'ACH', 'Wire', 'Check']

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-surface-container-lowest rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-surface-container-lowest z-10 px-8 py-6 border-b border-surface-container-low">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-on-surface">New Transaction</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-surface-container-low rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-on-surface-variant" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Recipient */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Recipient / Payee *
              </label>
              <input
                type="text"
                required
                value={formData.recipient}
                onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                placeholder="e.g., Amazon Web Services"
                className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Category *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Amount (USD) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">
                  $
                </span>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60"
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-2">
                {formData.category === 'Revenue' ? 'This will be recorded as income' : 'This will be recorded as an expense'}
              </p>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Payment Method *
              </label>
              <select
                required
                value={formData.paymentMethod}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as Transaction['paymentMethod'] })}
                className="w-full px-4 py-3 bg-surface-container-low rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">
                Status *
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, status: 'completed' })}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                    formData.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Completed
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, status: 'pending' })}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                    formData.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
                  }`}
                >
                  Pending
                </button>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 bg-surface-container-low text-on-surface rounded-xl font-bold text-sm hover:bg-surface-container transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Create Transaction
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}
