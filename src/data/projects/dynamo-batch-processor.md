---
title: "Dynamo Batch Processor"
description: "Processador em lote para scripts Dynamo com logging e tratamento de erros automático."
pubDate: 2024-06-20
category: "dynamo-nodes"
technologies: ["Dynamo", "Python", "Revit API", "JSON"]
language: "python"
featured: true
repoUrl: "https://github.com/brunoarq/dynamo-batch"
---

## Visão Geral

Executar scripts Dynamo manualmente em dezenas de modelos Revit é tedioso e propenso a erros. Este processador automatiza a execução em lote com logging detalhado.

## Funcionalidades

- Execução em lote de scripts .dyn em múltiplos modelos
- Log estruturado com timestamp e status por modelo
- Retry automático em caso de falha
- Relatório final em CSV

## Exemplo de Código

```python
import clr
clr.AddReference('RevitServices')
from RevitServices.Persistence import DocumentManager

class BatchProcessor:
    def __init__(self, script_path, model_paths):
        self.script_path = script_path
        self.model_paths = model_paths
        self.results = []

    def run(self):
        for path in self.model_paths:
            try:
                doc = open_document(path)
                result = execute_dynamo(self.script_path, doc)
                self.results.append({"model": path, "status": "ok"})
            except Exception as e:
                self.results.append({"model": path, "status": "error", "msg": str(e)})
```

## Como Usar

Configure o arquivo `batch-config.json` com os caminhos dos modelos e o script Dynamo desejado, e execute via linha de comando.
