"use client";

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { AlertTriangle, TrendingDown } from "lucide-react"

export default function StockOutPage() {
    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Stock Out Entry</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Record Sale</CardTitle>
                    <CardDescription>Record items sold to customers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Product Search mock */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Product Name</label>
                        <Input placeholder="Search product..." />
                    </div>


                    <div className="space-y-2">
                        <label className="text-sm font-medium">Quantity Sold</label>
                        <Input type="number" placeholder="Enter quantity" />
                    </div>

                    <Button className="w-full size-lg bg-indigo-600 hover:bg-indigo-700">
                        <TrendingDown className="mr-2 h-4 w-4" />
                        Confirm Sale
                    </Button>

                </CardContent>
            </Card>
        </div>
    )
}
