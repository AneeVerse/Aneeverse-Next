/**
 * Verifies a Cloudflare Turnstile token.
 * 
 * @param {string} token The token received from the client.
 * @returns {Promise<boolean>} True if valid (or if Turnstile is bypassed/disabled), false otherwise.
 */
export async function verifyTurnstile(token) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  // Graceful fallback for local development / staging if key is not set
  if (!secretKey) {
    console.warn("Cloudflare Turnstile verification bypassed: TURNSTILE_SECRET_KEY environment variable is not defined.");
    return true;
  }

  if (!token) {
    console.error("Cloudflare Turnstile verification failed: Token is missing.");
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();
    
    if (!data.success) {
      console.error("Cloudflare Turnstile verification failed:", data["error-codes"] || "Unknown error");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error verifying Cloudflare Turnstile token:", error);
    return false;
  }
}
