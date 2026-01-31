"use client";

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Calendar as CalendarIcon, ScanLine } from "lucide-react"

export default function StockInPage() {
    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Stock In Entry</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Add New Batch</CardTitle>
                    <CardDescription>Record purchase of items from supplier</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Product Search mock */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Product Name / Barcode</label>
                        <div className="flex gap-2">
                            <Input placeholder="Search product or scan..." />
                            <Button variant="outline" size="icon">
                                <ScanLine className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Quantity</label>
                            <Input type="number" placeholder="e.g. 50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Unit</label>
                            <Input placeholder="e.g. pkt, kg" disabled value="pkt" />
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Cost Price (₹)</label>
                            <Input type="number" placeholder="0.00" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Selling Price (₹)</label>
                            <Input type="number" placeholder="0.00" />
                        </div>
                    </div>

                    <Button className="w-full size-lg mt-4">Add Stock</Button>

                </CardContent>
            </Card>
        </div>
    )
}
