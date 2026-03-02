---
title: "BIM QC Dashboard"
description: "Dashboard web para controle de qualidade de modelos BIM com verificações automáticas e relatórios."
pubDate: 2024-11-20
category: "scripting"
technologies: ["TypeScript", "React", "ifcopenshell", "Node.js", "SQLite"]
language: "typescript"
featured: false
repoUrl: "https://github.com/brunoduarto/bim-qc"
---

## Visão Geral

Verificar manualmente a conformidade de modelos BIM com padrões internos e normas é demorado e inconsistente. Este dashboard automatiza checks de qualidade e gera relatórios visuais.

## Funcionalidades

- Upload de arquivos IFC via interface web
- Verificações configuráveis (naming conventions, property sets obrigatórios, classificação)
- Dashboard com métricas e gráficos de conformidade
- Histórico de verificações por projeto
- Exportação de relatórios em PDF

## Checks Disponíveis

```typescript
const checks: QCCheck[] = [
  {
    id: "naming-convention",
    name: "Convenção de Nomenclatura",
    description: "Verifica se elementos seguem o padrão de nomenclatura",
    severity: "warning",
    run: (model) => {
      const violations = model.elements
        .filter(el => !el.name.match(/^[A-Z]{3}_/))
        .map(el => ({
          elementId: el.id,
          message: `Nome "${el.name}" não segue padrão XXX_`,
        }));
      return { passed: violations.length === 0, violations };
    },
  },
];
```

## Stack Técnica

Frontend em React com Recharts para visualizações. Backend em Node.js com processamento IFC via ifcopenshell (bridge Python). Dados persistidos em SQLite para simplicidade de deploy.
