---
title: "Revit IFC Exporter"
description: "Exportador IFC customizado para Revit com mapeamento de property sets e sistemas de classificação."
longDescription: "Ferramenta que estende a exportação nativa do Revit com definições de property sets customizados, mapeamento de sistemas de classificação (OmniClass, Uniclass) e exportação em lote para grandes projetos BIM."
pubDate: 2024-08-15
category: "ifc-tools"
technologies: ["Revit API", "IFC4", "C#", ".NET", "pyRevit"]
language: "csharp"
featured: true
repoUrl: "https://github.com/brunoarq/revit-ifc-exporter"
---

## Visão Geral

A exportação IFC nativa do Revit frequentemente não atende aos requisitos de projetos que exigem property sets customizados e classificações específicas. Esta ferramenta resolve esse problema com uma camada de configuração flexível.

## Funcionalidades

- Mapeamento de property sets via arquivo JSON de configuração
- Suporte para schemas IFC4 e IFC2x3
- Exportação em lote com barra de progresso
- Integração com sistemas de classificação

## Exemplo de Código

```csharp
public class IfcExportHandler : IExternalCommand
{
    public Result Execute(
        ExternalCommandData commandData,
        ref string message,
        ElementSet elements)
    {
        var doc = commandData.Application.ActiveUIDocument.Document;
        var config = ExportConfig.LoadFromJson("export-config.json");

        using (var tx = new Transaction(doc, "IFC Export"))
        {
            tx.Start();
            var exporter = new CustomIfcExporter(doc, config);
            exporter.ExportToFile("output.ifc");
            tx.Commit();
        }

        return Result.Succeeded;
    }
}
```

## Detalhes Técnicos

Construído sobre a Revit API com mapeamento customizado de property sets IFC. A configuração é feita via JSON, permitindo que equipes compartilhem templates de exportação sem alterar código.
