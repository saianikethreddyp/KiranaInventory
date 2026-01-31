"use client";

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Plus, Search, MoreVertical, Edit2, Trash2 } from "lucide-react"

export default function ProductsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold">Product Inventory</h1>
                <Link href="/products/new">
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                    </Button>
                </Link>
            </div>

            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Search products..." />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            <div className="grid gap-4">
                {/* Product Item Mockups */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i} className="overflow-hidden">
                        <CardContent className="p-0">
                            <div className="flex items-center p-4 gap-4">
                                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
                                    {['🥛', '🍞', '🍚', '🍫', '🧃'][i - 1]}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-base">{['Amul Tazaa Milk', 'Britannia Bread', 'India Gate Rice', 'Dairy Milk Silk', 'Real Juice Mix'][i - 1]}</h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                        <span>{['500ml', '400g', '5kg', '60g', '1L'][i - 1]}</span>
                                        <span>•</span>
                                        <span>Stock: <strong>{10 * i}</strong></span>
                                    </div>
                                </div>
                                <div className="text-right mr-2 hidden sm:block">
                                    <div className="font-bold">₹{[28, 45, 650, 80, 110][i - 1]}</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
