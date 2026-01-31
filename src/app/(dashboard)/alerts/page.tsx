"use client";

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Bell, AlertTriangle, AlertCircle } from "lucide-react"

export default function AlertsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">Alerts & Notification</h1>
            </div>

            <div className="space-y-4">
                {/* Alerts Sections */}
                <section>
                    <h2 className="text-lg font-semibold mb-3">Low Stock Alerts</h2>
                    <Card>
                        <CardContent className="p-0">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 border-b last:border-0 hover:bg-muted/50 transition-colors flex justify-between items-center">
                                    <div>
                                        <h3 className="font-medium">Tata Salt 1kg</h3>
                                        <p className="text-sm text-muted-foreground">Current Stock: <span className="text-destructive font-bold">2</span></p>
                                    </div>
                                    <Badge variant="outline" className="border-warning text-warning">Reorder</Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}
