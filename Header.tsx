
import { Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = ({ onSearch, searchValue = "", showUserMenu = true, onLogout }) => (
  <header className="bg-card border-b border-border shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Descrição de Cargos
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
              <span>•</span>
              <span className="font-medium text-foreground">GMaia</span>
              <span>&</span>
              <span className="font-medium text-foreground">Soegeo</span>
            </div>
          </div>
        </div>
        {onSearch && (
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar cargo..."
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>
        )}
        {showUserMenu && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Perfil</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={onLogout} className="gap-2 hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Sair</span>
            </Button>
          </div>
        )}
      </div>
      <div className="md:hidden mt-3 flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">GMaia</span>
        <span>&</span>
        <span className="font-medium text-foreground">Soegeo</span>
      </div>
    </div>
  </header>
);
