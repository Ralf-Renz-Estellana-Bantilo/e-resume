import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-w-full min-h-screen dark gradient-background-2 md-breakpoint:flex-col md-breakpoint:min-h-full">
            {children}
        </div>
    );
}
