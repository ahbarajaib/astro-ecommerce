const STRAPI_API = "http://localhost:1337/api";

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const response = await fetch(`${STRAPI_API}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Explicitly set the content type for JSON
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json(); // Parse the response JSON
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const loginUser = async (identifier: string, password: string) => {
  try {
    const response = await fetch(`${STRAPI_API}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
