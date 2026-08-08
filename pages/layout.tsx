import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="relative flex min-w-full min-h-screen dark gradient-background-2 md-breakpoint:flex-col md-breakpoint:min-h-full">
            <div
                aria-hidden
                className="fixed inset-0 z-0 pointer-events-none dot-pattern"
            />
            {children}
        </main>
    );
}
