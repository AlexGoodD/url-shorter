import { db } from '@/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'

export const getOriginalUrl = async (shortCode: string): Promise<string | null> => {
  const q = query(collection(db, 'urls'), where('shortCode', '==', shortCode))
  const querySnapshot = await getDocs(q)
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0]
    return doc.data().originalUrl
  }
  return null
}
