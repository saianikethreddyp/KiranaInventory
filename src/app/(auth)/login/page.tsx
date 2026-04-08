import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Store, ArrowRight } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full bg-background overflow-hidden relative">
            {/* Background Image / Left Pane */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 border-r border-white/10 items-center justify-center overflow-hidden">
                <Image
                    src="/auth-bg.png"
                    alt="Kirana App Hero Context"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
                <div className="relative z-10 text-white max-w-lg p-10 flex flex-col justify-end h-full w-full">
                    <div className="mb-10 backdrop-blur-xl bg-white/10 p-8 rounded-3xl border border-white/20 shadow-2xl transition-all hover:bg-white/15">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                            <Store className="h-7 w-7 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
                            Smart Kirana Management.
                        </h1>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Streamline your inventory, manage daily transactions, and grow your local business with powerful insights and effortless controls.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Pane (Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 relative">
                {/* Mobile Background (Shown only on small screens) */}
                <div className="absolute inset-0 lg:hidden">
                    <Image
                        src="/auth-bg.png"
                        alt="Hero Mobile"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
                </div>

                <div className="w-full max-w-md relative z-10">
                    <div className="flex justify-center mb-10 lg:hidden">
                        <div className="p-4 bg-primary text-primary-foreground shadow-xl rounded-2xl">
                            <Store className="h-8 w-8" />
                        </div>
                    </div>
                    
                    <div className="text-center lg:text-left mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Welcome back</h2>
                        <p className="text-muted-foreground text-sm">
                            Enter your details to access your store dashboard
                        </p>
                    </div>

                    <form className="space-y-6" action="/dashboard">
                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-sm font-semibold text-foreground/80">Mobile Number</label>
                            <Input 
                                id="mobile" 
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                required 
                                className="h-12 px-4 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-foreground/80">Password</label>
                                <Link href="#" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors hover:underline underline-offset-4">
                                    Forgot password?
                                </Link>
                            </div>
                            <Input 
                                id="password" 
                                type="password" 
                                placeholder="••••••••"
                                required 
                                className="h-12 px-4 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                            />
                        </div>
                        
                        <Button className="w-full h-12 text-base font-semibold mt-4 group">
                            Sign in to Store
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </form>

                    <div className="mt-10 text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-all">
                            Create store account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
