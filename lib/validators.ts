export function validateRegister(data: {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  if (!data.fullName || !data.email || !data.password || !data.confirmPassword)
    return "All fields are required";

  if (data.password !== data.confirmPassword) return "Passwords do not match";

  if (data.password.length < 6) return "Password must be at least 6 characters";

  return null;
}
