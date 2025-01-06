import { db } from '@/firebase'
import { collection, addDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore'
import { nanoid } from 'nanoid'

export const shortenUrl = async (url: string): Promise<string> => {
  if (!url) {
    throw new Error('Please enter a valid URL.')
  }

  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )

  if (!urlPattern.test(url)) {
    throw new Error('Please enter a valid URL.')
  }

  const slug = nanoid(8)
  const q = query(collection(db, 'urls'), where('shortCode', '==', slug))
  const existingSlug = await getDocs(q)

  if (!existingSlug.empty) {
    throw new Error('This custom slug is already taken. Please choose another one.')
  }

  const baseShortDomain = 'https://ursh.vercel.app/'
  const fullShortUrl = `${baseShortDomain}${slug}`

  await addDoc(collection(db, 'urls'), {
    originalUrl: url,
    shortCode: slug,
    createdAt: serverTimestamp(),
  })

  return fullShortUrl
}
