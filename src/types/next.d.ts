// This is a workaround for a Next.js type issue.
// It overrides the global PageProps to avoid a build error.
declare global {
  interface PageProps<T = Record<string, string>> {
    params: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}

// We need to export something to make this a module.
export {};
