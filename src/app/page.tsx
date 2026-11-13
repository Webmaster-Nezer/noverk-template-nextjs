import { Counter } from "@/components/counter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Your new app</h1>
      <p className="text-muted-foreground">Next.js, Tailwind CSS and shadcn/ui are set up. Describe what to build in Noverk Web Code and the agent takes it from here.</p>
      <Card>
        <CardHeader>
          <CardTitle>A working component</CardTitle>
          <CardDescription>With a test in src/components/counter.test.tsx.</CardDescription>
        </CardHeader>
        <CardContent><Counter /></CardContent>
      </Card>
    </main>
  );
}
