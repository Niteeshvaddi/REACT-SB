
import { apiRequest } from './api'

export function registerUser(userData) {
  return apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  })
}

export function loginUser(credentials) {
  return apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}

export function requestPasswordReset(email) {
  return apiRequest('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

export function logoutUser() {
  return apiRequest('/auth/logout', {
    method: 'POST',
  })
}

export function getCurrentUser() {
  return apiRequest('/users/me', {
    method: 'GET',
  })
}
