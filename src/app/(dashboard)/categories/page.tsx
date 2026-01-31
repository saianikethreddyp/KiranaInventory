"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { Plus, Search, Edit2, Trash2, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function CategoriesPage() {
    // Mock Data
    const [categories, setCategories] = useState([
        { id: 1, name: "Dairy", count: 12 },
        { id: 2, name: "Bakery", count: 8 },
        { id: 3, name: "Snacks", count: 24 },
        { id: 4, name: "Beverages", count: 15 },
        { id: 5, name: "Cleaners", count: 6 },
    ]);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    const handleCreateCategory = () => {
        if (!newCategoryName.trim()) return;
        const newCat = {
            id: categories.length + 1,
            name: newCategoryName,
            count: 0
        };
        setCategories([...categories, newCat]);
        setNewCategoryName("");
        setIsDialogOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
                    <p className="text-muted-foreground text-sm">Organize your inventory with custom categories.</p>
                </div>
                <Button onClick={() => setIsDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((cat) => (
                    <Card key={cat.id} className="group hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">{cat.name}</CardTitle>
                            <Layers className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-2xl font-bold">{cat.count}</span>
                                <span className="text-xs text-muted-foreground">products linked</span>
                            </div>
                            <div className="flex gap-2 mt-4 pt-4 border-t opacity-60 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Edit2 className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10">
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Create Category Dialog */}
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Create New Category"
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Category Name</label>
                        <Input
                            placeholder="e.g. Personal Care"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            autoFocus
                        />
                        <p className="text-xs text-muted-foreground">This category will be available when adding products.</p>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleCreateCategory}>Create Category</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
