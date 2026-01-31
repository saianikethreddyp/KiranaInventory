import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Store } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Store className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl">Create Store Login</CardTitle>
                    <CardDescription>
                        Enter your mobile number to access your store
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="mobile" className="text-sm font-medium">Mobile Number</label>
                        <Input id="mobile" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                            <Link href="#" className="ml-auto inline-block text-sm underline text-muted-foreground hover:text-primary">
                                Forgot?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button className="w-full">Sign in</Button>
                </CardContent>
                <CardFooter className="flex justify-center text-sm text-muted-foreground">
                    Don&apos;t have an account?
                    <Link href="#" className="ml-1 underline text-primary hover:text-primary/80">Register</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
