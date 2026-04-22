import { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { supabase } from '../config/supabase'
import { handleError } from '../utils/errorHandler'
import { RegisterRequest, UserRole } from '../types'

export const register = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password }: RegisterRequest = req.body

    // Validation
    if (!email || !password || !fullName) {
      return handleError('Missing required fields', 400)
    }

    // Check if user exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()

    if (existingUser) {
      return handleError('User already exists', 409)
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Create user
    const { data: newUser, error } = await supabase
      .from('users')
      .insert({
        email,
        full_name: fullName,
        password_hash: hashedPassword,
        role: UserRole.SUPER_ADMIN,
        status: 'pending', // Admin must approve
      })
      .select()
      .single()

    if (error) {
      return handleError('Failed to create user', 500)
    }

    res.status(201).json({
      message: 'User created successfully. Awaiting admin approval.',
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.full_name,
      },
    })
  } catch (error) {
    console.error(error)
    handleError('Registration failed', 500)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return handleError('Email and password required', 400)
    }

    // Get user
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !user) {
      return handleError('User not found', 404)
    }

    // Check status
    if (user.status !== 'active') {
      return handleError('Account not approved yet', 403)
    }

    // Verify password
    const isPasswordValid = await bcryptjs.compare(password, user.password_hash)

    if (!isPasswordValid) {
      return handleError('Invalid credentials', 401)
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(error)
    handleError('Login failed', 500)
  }
}
