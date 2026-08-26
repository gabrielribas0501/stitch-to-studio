/**
 * Cliente HTTP fino usado pelos repositórios de infraestrutura.
 * A URL da API NestJS vem de VITE_API_URL (ex.: http://localhost:3000/api).
 */
export const API_BASE_URL: string | undefined = import.meta.env['VITE_API_URL'] as
  | string
  | undefined;

export const isApiConfigured = Boolean(API_BASE_URL);

export class ApiError extends Error {
  constructor(
    override readonly message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface RequestOptions {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
  signal?: AbortSignal;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError("API não configurada (VITE_API_URL ausente)", 0);
  }

  const url = new URL(`${API_BASE_URL.replace(/\/$/, "")}${path}`);
  for (const [key, value] of Object.entries(options.query ?? {})) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }

  const response = await fetch(url.toString(), {
    method: options.method ?? "GET",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    ...(options.body === undefined ? {} : { body: JSON.stringify(options.body) }),
    ...(options.signal ? { signal: options.signal } : {}),
  });

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new ApiError(payload?.message ?? "Falha na comunicação com o servidor", response.status);
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
