export interface AuthResponse {
    token: string,
    user: {
        createdAt: string,
        email: string,
        firstName: string,
        id: number,
        lastName: string,
        role: string,
    }
}

export interface RegisterPayload {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string | undefined,
    cpf: string,
}

export interface LoginPayload {
    email: string,
    password: string,
}

export const authService = {

    register: async (payload: RegisterPayload): Promise<AuthResponse> => {
        const res = await fetch("/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw await handleError(res);
        return res.json()
    },

    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw await handleError(res);
        return res.json()
    }
}

async function handleError(res: Response) {
    const json = await res.json().catch(() => ({}));
    return new Error(json.error || `Request failed: ${res.status}`);
}