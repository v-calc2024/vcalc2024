import jwt from 'jsonwebtoken-promisified';

export async function getObjectHash({ tokenValue = null }: { tokenValue?: string | null }) {
    const token: any = !(typeof window !== 'undefined') ? tokenValue : localStorage.getItem('token')?.toString();
  
    if (!token) {
      return null;
    }
  
    try {
        const decoded: any = await jwt.decode(token);
        return decoded?.objectHash || null
      } catch (error) {
        console.error(error);
      }
  }
  