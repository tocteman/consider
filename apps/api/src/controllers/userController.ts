import { createUsersRepository } from '@consider/database';
import { User } from '@consider/interfaces';
import bcrypt from 'bcrypt';

const usersRepo = createUsersRepository();

async function signIn(req, res) {
  const { email, password } = req.body;

  try {
    const user = await usersRepo.getByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // You can store user data in session or send it as a JWT
    const sessionedUser = { id: user.id, email: user.email, type: user.type };
    req.session.user = sessionedUser
    req.session.authenticated = true
    req.session.isAuthenticated = true

    res.status(200).json(sessionedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function signUp(req, res) {
  const userData: Omit<User, 'id' | 'created_at' | 'updated_at'> = req.body;

  try {
    const existingUser = await usersRepo.getByEmail(userData.email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = await usersRepo.create(userData);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function signOut(req, res) {
  req.session.user = null;
  res.status(200).json({ message: 'Signed out successfully' });
}

async function checkAuth(req, res) {
  if (req.session && req.session.cookie && req.session.isAuthenticated) {
    res.status(200).json({isAuthenticated: true})
  } else {
    res.status(200).json({isAuthenticated: false})
  }
}
export const userController = {
  signIn,
  signOut,
  signUp,
  checkAuth
};

