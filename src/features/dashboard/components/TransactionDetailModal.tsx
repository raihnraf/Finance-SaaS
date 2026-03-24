import { X, Mail, Phone, Calendar, CreditCard, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Transaction } from '@/store/transactionStore'

interface TransactionDetailModalProps {
  transaction: Transaction | null
  onClose: () => void
}

export function TransactionDetailModal({ transaction, onClose }: TransactionDetailModalProps) {
  if (!transaction) return null

  const isIncome = transaction.amount > 0

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
              <h2 className="text-2xl font-bold text-on-surface">Transaction Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-surface-container-low rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-on-surface-variant" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Amount Card */}
            <div className={`p-6 rounded-2xl ${isIncome ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className="text-sm font-bold text-on-surface-variant mb-1">Amount</p>
              <p className={`text-4xl font-bold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    transaction.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : transaction.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {transaction.status}
                </span>
                <span className="text-xs text-on-surface-variant">
                  {transaction.category}
                </span>
              </div>
            </div>

            {/* Recipient Info */}
            <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">
                  {transaction.initials}
                </span>
              </div>
              <div>
                <p className="font-bold text-on-surface">{transaction.recipient}</p>
                <p className="text-sm text-on-surface-variant">ID: {transaction.id}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-4">
              <DetailItem
                icon={Calendar}
                label="Date"
                value={transaction.date}
              />
              <DetailItem
                icon={User}
                label="Approved By"
                value={transaction.approvedBy}
              />
              <DetailItem
                icon={CreditCard}
                label="Payment Method"
                value={transaction.paymentMethod}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">
                Download Receipt
              </button>
              <button className="flex-1 py-3 bg-surface-container-low text-on-surface rounded-xl font-bold text-sm hover:bg-surface-container transition-colors">
                Report Issue
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  )
}

interface DetailItemProps {
  icon: any
  label: string
  value: string
}

function DetailItem({ icon: Icon, label, value }: DetailItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-on-surface-variant">{label}</p>
        <p className="text-sm font-bold text-on-surface">{value}</p>
      </div>
    </div>
  )
}
