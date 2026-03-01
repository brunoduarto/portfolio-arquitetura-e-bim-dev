---
title: "IFC Parser Python"
description: "Biblioteca Python para parsing e análise de arquivos IFC com foco em extração de quantitativos."
pubDate: 2024-10-01
category: "ifc-tools"
technologies: ["Python", "ifcopenshell", "IFC4", "pandas", "CLI"]
language: "python"
featured: true
repoUrl: "https://github.com/brunoarq/ifc-parser"
---

## Visão Geral

Extrair dados de arquivos IFC para análise de quantitativos e validação de modelos geralmente exige ferramentas comerciais caras. Esta biblioteca Python oferece uma alternativa open-source leve e extensível.

## Funcionalidades

- Parsing de IFC4 e IFC2x3 com ifcopenshell
- Extração de quantitativos por categoria (paredes, lajes, pilares)
- Exportação para CSV e DataFrame pandas
- Interface CLI para uso em pipelines de automação
- Validação de property sets obrigatórios

## Exemplo de Código

```python
import ifcopenshell
from ifc_parser import QuantityExtractor

model = ifcopenshell.open("modelo.ifc")
extractor = QuantityExtractor(model)

# Extrair quantitativos de paredes
walls = extractor.get_quantities("IfcWall")
for wall in walls:
    print(f"{wall.name}: {wall.area:.2f} m², {wall.volume:.3f} m³")

# Exportar para CSV
extractor.to_csv("quantitativos.csv", categories=["IfcWall", "IfcSlab"])
```

## Instalação

```bash
pip install ifc-parser-br
```
