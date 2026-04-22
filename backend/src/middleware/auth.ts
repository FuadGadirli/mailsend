import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { handleError } from '../utils/errorHandler'

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string
    email: string
    role: string
  }
}

export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return handleError('No token provided', 401)
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.user = decoded as any
    next()
  } catch (error) {
    handleError('Invalid token', 401)
  }
}
