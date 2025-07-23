import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Login = () => {
  const [cpf, setCpf] = useState("");
  const [domain, setDomain] = useState("");
  const [activeTab, setActiveTab] = useState("cpf");
  const navigate = useNavigate();
  const { toast } = useToast();

  const formatCPF = (val: string) =>
    val.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    if (formatted.length <= 14) setCpf(formatted);
  };

  const handleLogin = () => {
    if (activeTab === "cpf" && cpf.length < 14) {
      return toast({ title: "CPF inválido", description: "Digite um CPF válido.", variant: "destructive" });
    }
    if (activeTab === "domain" && !domain.includes("@")) {
      return toast({ title: "Email inválido", description: "Digite um email válido.", variant: "destructive" });
    }
    toast({ title: "Login realizado!", description: "Redirecionando..." });
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-elevated backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> Acesso Restrito
            </CardTitle>
            <CardDescription>Entre com seu CPF ou email corporativo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex bg-muted rounded-lg p-1">
              <button onClick={() => setActiveTab("cpf")} className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${activeTab === "cpf" ? "bg-white shadow-sm" : "text-muted-foreground"}`}>CPF</button>
              <button onClick={() => setActiveTab("domain")} className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${activeTab === "domain" ? "bg-white shadow-sm" : "text-muted-foreground"}`}>Email</button>
            </div>
            {activeTab === "cpf" ? (
              <div>
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" placeholder="000.000.000-00" value={cpf} onChange={handleCPFChange} />
              </div>
            ) : (
              <div>
                <Label htmlFor="domain">Email</Label>
                <Input id="domain" type="email" placeholder="nome@empresa.com" value={domain} onChange={(e) => setDomain(e.target.value)} />
              </div>
            )}
            <Button onClick={handleLogin} className="w-full">Entrar no Sistema</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
