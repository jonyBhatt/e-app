import { useNavigate } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-blue-600 mb-4'>404</h1>
        <h2 className='text-3xl font-bold text-gray-800 mb-2'>পৃষ্ঠা পাওয়া যায়নি</h2>
        <p className='text-gray-600 text-lg mb-8'>আপনি যেই পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই।</p>
        
        <div className='flex gap-4 justify-center'>
          <button
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            <ArrowLeft size={20} />
            ফিরে যান
          </button>
          <button
            onClick={() => navigate('/')}
            className='px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors'
          >
            হোমপেজ
          </button>
        </div>
      </div>
    </div>
  )
}
