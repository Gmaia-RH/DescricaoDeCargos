import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, BarChart3, Target, Building2, ArrowRight } from "lucide-react";

export const Home = () => {
  const navigate = useNavigate();
  const features = [
    { icon: Search, title: "Busca Inteligente", description: "Encontre rapidamente qualquer cargo por nome, setor ou habilidades necessárias." },
    { icon: TrendingUp, title: "Progressão de Carreira", description: "Visualize claramente os caminhos de crescimento profissional disponíveis." },
    { icon: BarChart3, title: "Faixas Salariais", description: "Acesse informações transparentes sobre remuneração de cada posição." },
    { icon: Target, title: "Mobilidade Horizontal", description: "Descubra oportunidades em diferentes setores com cargos similares." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Mapeamento de Cargos <span className="block text-white/80">GMaia & Soegeo</span></h1>
        <p className="text-xl mb-8">Conheça sua posição, entenda sua carreira e descubra novas oportunidades de crescimento profissional.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => navigate("/login")} className="bg-white text-primary px-8 text-lg">Entrar no Sistema</Button>
          <Button variant="outline" className="border-white text-white px-8 text-lg">Saiba Mais</Button>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como o Descrição de Cargos Funciona</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
