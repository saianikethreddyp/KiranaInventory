"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Dialog } from "@/components/ui/Dialog";
import { ArrowLeft, Save } from "lucide-react";

export default function AddProductPage() {
    const router = useRouter();
    const [categories, setCategories] = useState<string[]>(["Dairy", "Bakery", "Snacks", "Beverages", "Staples", "Household"]);

    // Form State
    const [productName, setProductName] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [unit, setUnit] = useState("");
    const [minStock, setMinStock] = useState("");

    // Dialog State
    const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    const handleCreateCategory = () => {
        if (!newCategoryName.trim()) return;
        setCategories([...categories, newCategoryName]);
        setSelectedCategory(newCategoryName); // Auto select the new category
        setNewCategoryName("");
        setIsCategoryDialogOpen(false);
    };

    const handleSaveProduct = () => {
        // Logic to save product (mock)
        console.log("Saving Product:", { productName, selectedCategory, unit, minStock });
        alert("Product Added Successfully!");
        router.push("/products");
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/products">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
                    <p className="text-muted-foreground text-sm">Create a new item in your inventory catalogue.</p>
                </div>
            </div>

            <Card className="rounded-2xl border-none shadow-sm ring-1 ring-border/50">
                <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>Enter the basic information about the product.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Product Name</label>
                        <Input
                            placeholder="e.g. Amul Milk 500ml"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <Select
                                options={categories}
                                value={selectedCategory}
                                onChange={setSelectedCategory}
                                onCreateNew={() => setIsCategoryDialogOpen(true)}
                                placeholder="Select Category"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Unit</label>
                            <Input
                                placeholder="e.g. pkt, kg, ltr"
                                value={unit}
                                onChange={(e) => setUnit(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Minimum Stock Level (Alert Threshold)</label>
                        <Input
                            type="number"
                            placeholder="e.g. 5"
                            value={minStock}
                            onChange={(e) => setMinStock(e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">You will be notified when stock falls below this number.</p>
                    </div>

                    <div className="pt-4 flex justify-end gap-2">
                        <Link href="/products">
                            <Button variant="outline" className="rounded-xl">Cancel</Button>
                        </Link>
                        <Button className="rounded-xl min-w-[120px]" onClick={handleSaveProduct}>
                            <Save className="mr-2 h-4 w-4" />
                            Save Product
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Create Category Dialog */}
            <Dialog
                isOpen={isCategoryDialogOpen}
                onClose={() => setIsCategoryDialogOpen(false)}
                title="Create New Category"
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Category Name</label>
                        <Input
                            placeholder="e.g. Frozen Foods"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" onClick={() => setIsCategoryDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleCreateCategory}>Create Category</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
