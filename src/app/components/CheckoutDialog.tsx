import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  totalPrice: number;
  onComplete: () => void;
}

export function CheckoutDialog({ open, onOpenChange, totalPrice, onComplete }: CheckoutDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryDate: "",
    cardMessage: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order submission
    toast.success("Order placed successfully!", {
      description: `Your flowers will be delivered to ${formData.address}`,
    });
    
    onComplete();
    onOpenChange(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      deliveryDate: "",
      cardMessage: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Complete Your Order</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea
              id="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 Main St, Apt 4, City, State, ZIP"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
            <Input
              id="deliveryDate"
              type="date"
              required
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div>
            <Label htmlFor="cardMessage">Card Message (Optional)</Label>
            <Textarea
              id="cardMessage"
              value={formData.cardMessage}
              onChange={(e) => setFormData({ ...formData, cardMessage: e.target.value })}
              placeholder="Add a personal message to your bouquet..."
              rows={3}
            />
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-pink-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" size="lg">
              Place Order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
