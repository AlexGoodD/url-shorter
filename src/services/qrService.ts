import QRCode from 'qrcode'

export const generateQRCode = async (text: string): Promise<string> => {
  try {
    return await QRCode.toDataURL(text)
  } catch {
    throw new Error('Failed to generate QR code')
  }
}
