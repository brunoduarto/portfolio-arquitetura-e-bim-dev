---
title: "Revit Room Tagger"
description: "Plugin Revit para tagueamento automático de ambientes com dados de acabamentos e áreas."
pubDate: 2024-02-05
category: "revit-scripts"
technologies: ["Revit API", "C#", "WPF", ".NET", "pyRevit"]
language: "csharp"
featured: false
---

## Visão Geral

Em projetos com centenas de ambientes, taguear manualmente cada room com informações de acabamento, área e especificações é um processo repetitivo. Este plugin automatiza o tagueamento com dados extraídos de uma planilha de acabamentos.

## Funcionalidades

- Importação de planilha de acabamentos (Excel/CSV)
- Matching automático room → acabamento por nome ou número
- Criação de tags com template customizável
- Atualização em lote de parâmetros compartilhados
- Preview antes da aplicação

## Exemplo de Código

```csharp
public void TagRooms(Document doc, List<FinishData> finishes)
{
    var rooms = new FilteredElementCollector(doc)
        .OfCategory(BuiltInCategory.OST_Rooms)
        .WhereElementIsNotElementType()
        .Cast<Room>()
        .ToList();

    using (var tx = new Transaction(doc, "Tag Rooms"))
    {
        tx.Start();
        foreach (var room in rooms)
        {
            var finish = finishes.FirstOrDefault(f => f.RoomNumber == room.Number);
            if (finish == null) continue;

            room.LookupParameter("Acabamento Piso")?.Set(finish.Floor);
            room.LookupParameter("Acabamento Parede")?.Set(finish.Wall);
            room.LookupParameter("Acabamento Forro")?.Set(finish.Ceiling);
        }
        tx.Commit();
    }
}
```

## Interface

O plugin inclui uma janela WPF para preview dos matches e confirmação antes de aplicar as alterações no modelo.
