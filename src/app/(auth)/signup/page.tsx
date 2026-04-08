import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Store, ArrowRight, User, Hash } from "lucide-react"

export default function SignupPage() {
    return (
        <div className="flex min-h-screen w-full bg-background overflow-hidden relative">
            {/* Background Image / Right Pane (Swapped dynamically on Desktop for interest) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-zinc-900 border-l border-white/10 items-center justify-center overflow-hidden order-2">
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
                            Join the Network.
                        </h1>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Sign up today and get access to smart inventory tools, analytics, and business growth features crafted specifically for modern Kirana stores.
                        </p>
                    </div>
                </div>
            </div>

            {/* Left Pane (Form) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 relative order-1">
                {/* Mobile Background */}
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
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">Create an account</h2>
                        <p className="text-muted-foreground text-sm">
                            Setup your store profile to get started
                        </p>
                    </div>

                    <form className="space-y-5" action="/dashboard">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-semibold text-foreground/80">First Name</label>
                                <Input 
                                    id="firstName" 
                                    placeholder="Ramesh" 
                                    required 
                                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-semibold text-foreground/80">Last Name</label>
                                <Input 
                                    id="lastName" 
                                    placeholder="Kumar" 
                                    className="h-12 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="storeName" className="text-sm font-semibold text-foreground/80">Store Name</label>
                            <div className="relative">
                                <Store className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground" />
                                <Input 
                                    id="storeName" 
                                    placeholder="Sri Sai Kirana & General Store" 
                                    required 
                                    className="h-12 pl-11 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-sm font-semibold text-foreground/80">Mobile Number</label>
                            <div className="relative">
                                <Hash className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground" />
                                <Input 
                                    id="mobile" 
                                    type="tel" 
                                    placeholder="+91 98765 43210" 
                                    required 
                                    className="h-12 pl-11 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-semibold text-foreground/80">Password</label>
                            <Input 
                                id="password" 
                                type="password" 
                                placeholder="Create a secure password"
                                required 
                                className="h-12 px-4 bg-secondary/50 border-border/50 focus:bg-background transition-colors text-base"
                            />
                        </div>
                        
                        <Button className="w-full h-12 text-base font-semibold mt-6 group">
                            Register Store
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </form>

                    <div className="mt-10 text-center text-sm text-muted-foreground">
                        Already have a store account?{" "}
                        <Link href="/login" className="font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-all">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
